export interface SortFilterData {
  id?: number;
  title?: string;
  type?: string;
  categories?: any[];
  sorts?: sortData[];
  options?: Filters[];
}

export interface Filters {
  id: number;
  title: string;
  type: string;
  options?: checkboxData[];
  value?: any;
  description?: string;
}

export interface checkboxData {
  id: number;
  name: string;
  active: boolean;
}

export interface sortData {
  id: number;
  name: string;
}

export interface brandImage {
  id: number;
  name: string;
  img: string;
}

export interface rangeInput {
  startRange?: number;
  endRange?: number;
}
