export interface NewListData {
  id: string;
  create_date: string;
  img: string;
  name: string;
  view?: string;
  author?: string;
}

export interface NewListResponseData {
  _id: string;
  create_date: string;
  img: string;
  name: string;
  view: string;
  author: string;
}

export interface NewDetailData {
  id: string;
  create_date: string;
  img: string;
  name: string;
  view: string;
  author: string;
  content: string;
}

export interface NewDetailResponseData {
  _id: string;
  create_date: string;
  img: string;
  name: string;
  view: string;
  author: string;
  content: string;
}

export interface paginatorParams {
  limit: number;
  skip: number;
}
