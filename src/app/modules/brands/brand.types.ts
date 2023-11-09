export interface brandResponseData {
  id: string;
  image: string;
  name: string;
}

export interface brandData {
  id: string;
  image: string;
  name: string;
}

export interface brandList {
  title: string;
  data?: brandData[];
}
