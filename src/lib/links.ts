import type { Person } from "./types";

export function mailtoHref(person: Person) {
  return `mailto:${person.email}`;
}

export function telHref(person: Person) {
  return `tel:${person.phone.replace(/\s+/g, "")}`;
}
