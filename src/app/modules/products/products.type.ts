export interface productData {
  id: string;
  price: number;
  create_date: string;
  discount: number | null;
  image: string;
  name: string;
  quantity: number;
  view_number: number;
  gift_id: number;
}

export interface categoryResponse {
  data: { id: number; name: string }[];
}
