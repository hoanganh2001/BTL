export interface productManagementResponseData {
  id: number;
  name: string;
  price: number;
  create_date: string;
  discount: number | null;
  quantity: number | null;
  thumbnail: string;
  view_number: number | null;
  gift_id: number;
  favorite: boolean;
  category_id: number;
  category_name: string;
}
export interface categoryResponse {
  data: { id: number; name: string }[];
}

export interface typeData {
  id: number;
  name: string;
}
