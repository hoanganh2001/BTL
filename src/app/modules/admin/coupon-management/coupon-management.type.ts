export interface Coupon {
  id: number;
  name: string;
  start_date: string;
  expired_date: string;
  quantity: number;
  unit: string;
  value: number;
}

export interface typeData {
  id: number;
  name: string;
  template?: string;
}

export interface popUpData {
  type: string;
  item?: Coupon;
}

export interface imageDetailList {
  id?: number;
  name?: string;
  url?: string | ArrayBuffer;
}
