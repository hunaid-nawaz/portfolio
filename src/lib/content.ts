import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { withBasePath } from "./base-path";
import type {
  CaseStudy,
  Lane,
  Person,
  Post,
  Role,
  SiteCopy,
  ToolboxGroup,
} from "./types";

const root = path.join(process.cwd(), "content");

function readFile(rel: string) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function listMarkdown(dir: string) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) {
    return [];
  }

  return fs
    .readdirSync(abs)
    .filter((name) => name.endsWith(".md") && !name.startsWith("."))
    .filter((name) => name !== ".gitkeep.md")
    .map((name) => {
      const raw = fs.readFileSync(path.join(abs, name), "utf8");
      const parsed = matter(raw);
      return { name, data: parsed.data, body: parsed.content.trim() };
    });
}

function stringField(data: Record<string, unknown>, key: string, fallback = "") {
  const value = data[key];
  return typeof value === "string" ? value : fallback;
}

function numberField(data: Record<string, unknown>, key: string, fallback = 0) {
  const value = data[key];
  return typeof value === "number" ? value : fallback;
}

function boolField(data: Record<string, unknown>, key: string, fallback = false) {
  const value = data[key];
  return typeof value === "boolean" ? value : fallback;
}

function stringList(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.filter((item): item is string => typeof item === "string");
}

export function getPerson(): Person {
  const parsed = matter(readFile("person.md"));
  const data = parsed.data as Record<string, unknown>;

  return {
    name: stringField(data, "name"),
    shortName: stringField(data, "shortName"),
    headline: stringField(data, "headline"),
    roleLabel: stringField(data, "roleLabel"),
    company: stringField(data, "company"),
    stackLine: stringField(data, "stackLine"),
    yearsExperience: numberField(data, "yearsExperience"),
    email: stringField(data, "email"),
    phone: stringField(data, "phone"),
    linkedin: stringField(data, "linkedin"),
    github: stringField(data, "github"),
    photo: withBasePath(stringField(data, "photo")),
    photoAlt: stringField(data, "photoAlt"),
    kicker: stringField(data, "kicker"),
    heroTitle: stringField(data, "heroTitle"),
    heroAccent: stringField(data, "heroAccent"),
    bio: parsed.content.trim(),
  };
}

export function getCopy(): SiteCopy {
  const data = matter(readFile("copy.md")).data as Record<string, unknown>;

  return {
    lanesEyebrow: stringField(data, "lanesEyebrow"),
    skillsEyebrow: stringField(data, "skillsEyebrow"),
    workEyebrow: stringField(data, "workEyebrow"),
    workTitle: stringField(data, "workTitle"),
    workIntro: stringField(data, "workIntro"),
    aboutEyebrow: stringField(data, "aboutEyebrow"),
    aboutTitle: stringField(data, "aboutTitle"),
    aboutLead: stringField(data, "aboutLead"),
    toolboxEyebrow: stringField(data, "toolboxEyebrow"),
    toolboxTitle: stringField(data, "toolboxTitle"),
    writingEyebrow: stringField(data, "writingEyebrow"),
    writingTitle: stringField(data, "writingTitle"),
    writingEmptyTitle: stringField(data, "writingEmptyTitle"),
    writingEmptyBody: stringField(data, "writingEmptyBody"),
    ctaEyebrow: stringField(data, "ctaEyebrow"),
    ctaTitle: stringField(data, "ctaTitle"),
    ctaBody: stringField(data, "ctaBody"),
  };
}

export function getLanes(): Lane[] {
  const data = matter(readFile("lanes.md")).data as Record<string, unknown>;
  const items = Array.isArray(data.items) ? data.items : [];

  return items.flatMap((item) => {
    if (!item || typeof item !== "object") {
      return [];
    }
    const row = item as Record<string, unknown>;
    return [
      {
        id: stringField(row, "id"),
        index: stringField(row, "index"),
        title: stringField(row, "title"),
        summary: stringField(row, "summary"),
        tags: stringList(row.tags),
      },
    ];
  });
}

export function getToolbox(): ToolboxGroup[] {
  const data = matter(readFile("toolbox.md")).data as Record<string, unknown>;
  const groups = Array.isArray(data.groups) ? data.groups : [];

  return groups.flatMap((item) => {
    if (!item || typeof item !== "object") {
      return [];
    }
    const row = item as Record<string, unknown>;
    return [
      {
        id: stringField(row, "id"),
        label: stringField(row, "label"),
        title: stringField(row, "title"),
        tags: stringList(row.tags),
      },
    ];
  });
}

export function getRoles(): Role[] {
  return listMarkdown("roles")
    .map(({ data, body, name }) => {
      const row = data as Record<string, unknown>;
      return {
        slug: stringField(row, "slug", name.replace(/\.md$/, "")),
        title: stringField(row, "title"),
        org: stringField(row, "org"),
        orgDetail: stringField(row, "orgDetail"),
        period: stringField(row, "period"),
        sort: numberField(row, "sort", 99),
        body,
      };
    })
    .sort((a, b) => a.sort - b.sort);
}

export function getCaseStudies(): CaseStudy[] {
  return listMarkdown("case-studies")
    .map(({ data, body, name }) => {
      const row = data as Record<string, unknown>;
      return {
        slug: stringField(row, "slug", name.replace(/\.md$/, "")),
        title: stringField(row, "title"),
        kicker: stringField(row, "kicker"),
        outcome: stringField(row, "outcome"),
        stack: stringList(row.stack),
        featured: boolField(row, "featured", true),
        anonymized: boolField(row, "anonymized", false),
        sort: numberField(row, "sort", 99),
        body,
      };
    })
    .sort((a, b) => a.sort - b.sort);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((item) => item.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getCaseStudies().filter((item) => item.featured);
}

export function getPosts(): Post[] {
  return listMarkdown("posts")
    .filter(({ data }) => typeof data.title === "string" && data.title.length > 0)
    .map(({ data, body, name }) => {
      const row = data as Record<string, unknown>;
      return {
        slug: stringField(row, "slug", name.replace(/\.md$/, "")),
        title: stringField(row, "title"),
        kicker: stringField(row, "kicker"),
        date: stringField(row, "date"),
        body,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((item) => item.slug === slug);
}

export function siteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) {
    return fromEnv;
  }
  if (process.env.GITHUB_PAGES === "true") {
    return "https://hunaid-nawaz.github.io/portfolio";
  }
  return "http://localhost:3000";
}
