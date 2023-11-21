import { SubmenuData } from 'app/layout/common/sub-menu/sub-menu.type';

export interface Navigation {
  id: string;
  title?: string;
  link?: string;
  submenu?: SubmenuData;
  data?: any[];
  column?: number;
}
