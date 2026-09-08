export type Person = {
  name: string;
  shortName: string;
  headline: string;
  roleLabel: string;
  company: string;
  stackLine: string;
  yearsExperience: number;
  email: string;
  linkedin: string;
  github: string;
  photo: string;
  photoAlt: string;
  kicker: string;
  heroTitle: string;
  heroAccent: string;
  hireSubject: string;
  contractSubject: string;
  bio: string;
};

export type SiteCopy = {
  lanesEyebrow: string;
  lanesTitle: string;
  workEyebrow: string;
  workTitle: string;
  workIntro: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutLead: string;
  toolboxEyebrow: string;
  toolboxTitle: string;
  writingEyebrow: string;
  writingTitle: string;
  writingEmptyTitle: string;
  writingEmptyBody: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaBody: string;
};

export type Lane = {
  id: string;
  index: string;
  title: string;
  summary: string;
  tags: string[];
};

export type ToolboxGroup = {
  id: string;
  label: string;
  title: string;
  tags: string[];
};

export type Role = {
  slug: string;
  title: string;
  org: string;
  orgDetail: string;
  period: string;
  sort: number;
  body: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  outcome: string;
  stack: string[];
  featured: boolean;
  anonymized: boolean;
  sort: number;
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  body: string;
};
