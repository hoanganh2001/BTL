export interface brandResponseData {
  _id: string;
  img: string;
  name: string;
}

export interface brandData {
  id: string;
  img: string;
  name: string;
}

export interface brandList {
  title: string;
  data?: brandData[];
}
