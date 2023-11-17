export interface NewListData {
  id: string;
  create_date: string;
  img: string;
  name: string;
  view?: string;
  author?: string;
}

export interface NewListResponseData {
  id: string;
  create_date: string;
  image: string;
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
  id: string;
  create_date: string;
  img: string;
  name: string;
  view: string;
  author: string;
  content: string;
}

export interface paginatorParams {
  limit: number;
  offset: number;
}
