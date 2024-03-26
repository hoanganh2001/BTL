export interface orderManagementResponseData {
  id: number;
  user_id: number;
  name: string;
  address: string;
  email: string;
  phone_number: string;
  note?: string;
  payment: string;
  coupon?: string;
  create_date: string;
  status: number;
  status_name: string;
  update_date?: string;
  product: productDetail[];
}

export interface orderList {
  id: number;
  user_id: number;
  name: string;
  address: string;
  email: string;
  phone_number: string;
  note?: string;
  payment: string;
  coupon?: string;
  create_date: string;
  status: number;
  status_name: string;
  update_date?: string;
  product: productDetail[];
  isExpand: boolean;
}

export interface productDetail {
  id: number;
  name: string;
  image: number | string;
  discount?: number;
  price?: number;
  quantity: number;
}
