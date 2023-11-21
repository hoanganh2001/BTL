export interface filterData {
  id: string;
  name: string;
  type: string;
  options: checkboxData[];
}

export interface checkboxData {
  id: string | number;
  name: string;
  active: boolean;
}
