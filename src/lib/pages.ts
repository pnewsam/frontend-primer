export interface PageFrontmatter {
  title: string;
}

export interface NavItem {
  url: string;
  title: string;
}

// Helper to extract URL from file path
export function getUrlFromPath(filePath: string): string {
  const match = filePath.match(/\/pages(.+)\/index\.mdx$/);
  return match ? match[1] : "/";
}

// Helper to convert pages to nav items sorted by title
export function toNavItems(
  pages: { file: string; frontmatter: PageFrontmatter }[]
): NavItem[] {
  return pages
    .map((page) => ({
      url: getUrlFromPath(page.file),
      title: page.frontmatter.title,
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}
