export interface cartData {
  id: number;
  name?: string;
  image?: string;
  price?: number;
  discount?: number;
  quantity: number;
}

export interface coupon {
  id?: number;
  value?: number;
  unit?: string;
  label?: string;
}
