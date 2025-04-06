export type NavLink = {
  name: string;
  path: string;
  hasDropdown?: boolean;
  dropdownType?: 'about' | 'courses';
};

export interface MenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  bgColor?: string;
}