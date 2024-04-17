export interface productManagementResponseData {
  id: number;
  name: string;
  price: number;
  create_date: string;
  discount: number | null;
  quantity: number | null;
  thumbnail: number;
  thumbnail_file: string;
  view_number: number | null;
  gift_id: number;
  favorite: boolean;
  category_id: number;
  category_name: string;
}
export interface categoryResponse {
  data: { id: number; name: string }[];
}

export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

export interface popUpData {
  type: string;
  product_id?: number;
}

export interface FlatNode {
  id: number;
  expandable: boolean;
  name: string;
  level: number;
}

export interface typeData {
  id?: number;
  name?: string;
  template?: string;
}

export interface popUpData {
  type: string;
  category_id?: number;
}
