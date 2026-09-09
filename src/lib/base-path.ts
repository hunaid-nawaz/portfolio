const basePath = process.env.GITHUB_PAGES === "true" ? "/portfolio" : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) {
    return path;
  }
  if (!basePath || path === basePath || path.startsWith(`${basePath}/`)) {
    return path;
  }
  return `${basePath}${path}`;
}
