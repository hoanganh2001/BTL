export interface userList {
  id: number;
  name?: string;
  last_signin: number;
  create_date: string;
  email: string;
  phone?: string;
  address?: string;
  role_id: number;
  status: number;
  role_name: string;
}
export interface popUpData {
  type: string;
  user: userList;
}

export interface IOption {
  value: string | number;
  name: string;
}
