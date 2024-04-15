export interface BrandList {
  id: number;
  name: string;
  image?: number;
  thumbnail_url: string;
}

export interface typeData {
  id: number;
  name: string;
  template?: string;
}

export interface popUpData {
  type: string;
  item?: BrandList;
}

export interface imageDetailList {
  id?: number;
  name?: string;
  url?: string | ArrayBuffer;
}
