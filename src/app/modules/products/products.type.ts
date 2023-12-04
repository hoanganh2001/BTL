export interface productData {
  id: number;
  price: number;
  create_date: string;
  discount: number | null;
  image: string;
  name: string;
  quantity: number;
  view_number: number;
  gift_id: number;
  description?: string;
  specification: string;
  brand_name?: string;
  isFavorite?: boolean;
}

export interface categoryResponse {
  data: { id: number; name: string }[];
}
