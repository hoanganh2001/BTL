export interface SortFilterData {
  title?: string;
  type?: string;
  categories?: any[];
  sorts?: any[];
  filters?: FiltersData;
}

export interface FiltersData {
  brand?: brandImage;
  list?: Filters[];
}

export interface Filters {
  title: string;
  type: string;
  options?: checkboxData[];
  value?: any;
  description?: string;
}

export interface checkboxData {
  id: string | number;
  name: string;
  completed: boolean;
}

export interface brandImage {
  id: string | number;
  name: string;
  img: string;
}
