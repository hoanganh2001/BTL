export interface SubmenuData {
  type: string;
  name?: string;
  link?: string;
  list?: ListData[];
  category?: CategoryListData;
}

export interface CategoryListData {
  data: CategoryData[];
  logo: string;
  alt?: string;
}

export interface CategoryData {
  id: string;
  title: string;
  link?: string;
  icon?: string;
  svg?: string;
  active: boolean;
  data?: any[];
}

export interface ListData {
  name: string;
  img?: string;
}
