export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blogs" },
  { label: "Documentation", href: "/docs" },
];
