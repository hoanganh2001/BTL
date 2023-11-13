export interface SortFilterData {
  id?: string;
  title?: string;
  type?: string;
  categories?: any[];
  filterData?: string;
  sorts?: any[];
  options?: FiltersData[];
}

export interface FiltersData {
  brand?: brandImage;
  list?: Filters[];
}

export interface Filters {
  id: string;
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

export interface rangeInput {
  startRange?: number;
  endRange?: number;
}
