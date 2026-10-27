export const navItems = [
  { id: "about", href: "#about" },
  { id: "experience", href: "#experience" },
  { id: "education", href: "#education" },
  { id: "skills", href: "#skills" },
  { id: "projects", href: "#projects" },
  { id: "personal", href: "#personal" },
  { id: "contact", href: "#contact" }
]

export type NavItem = (typeof navItems)[number];

export function navLabel(id: string): string {
  return id.charAt(0).toUpperCase() + id.slice(1);
}