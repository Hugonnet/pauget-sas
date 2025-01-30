export interface SubMenuItem {
  name: string;
  path: string;
}

export interface MenuItem {
  name: string;
  path: string;
  disabled?: boolean;
  subItems?: SubMenuItem[];
}