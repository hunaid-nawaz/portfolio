import { getPerson, siteUrl } from "./content";

export function personDescription() {
  const person = getPerson();
  const first = person.bio.split("\n\n")[0] ?? person.heroAccent;
  return first.replace(/\s+/g, " ").trim();
}

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, `${siteUrl()}/`).toString();
}
