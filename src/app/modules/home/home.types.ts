export interface productResponseData {
  id: number;
  name: string;
  price: number;
  create_date: string;
  discount: number | null;
  quantity: number | null;
  image: string;
  view_number: number | null;
  gift_id: number;
  favorite: boolean;
}
