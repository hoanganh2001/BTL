export interface filterData {
  id: number;
  name: string;
  type: string;
  options: checkboxData[];
}

export interface checkboxData {
  id: number;
  name: string;
  active: boolean;
}
