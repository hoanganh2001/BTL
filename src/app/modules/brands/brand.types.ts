export interface brandResponseData {
  id: number;
  thumbnail_url?: string;
  name: string;
}

export interface brandData {
  id: number;
  image: string;
  name: string;
}

export interface brandList {
  title: string;
  data?: brandData[];
}
