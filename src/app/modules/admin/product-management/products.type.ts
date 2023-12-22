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

export interface typeData {
  id: number;
  name: string;
}

export interface popUpData {
  type: string;
  product_id?: number;
}

export interface imageDetailList {
  id?: number;
  name?: string;
  url: string | ArrayBuffer;
  isThumbnail?: boolean;
  isNew?: boolean;
}
