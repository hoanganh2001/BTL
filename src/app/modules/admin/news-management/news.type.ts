export interface NewsList {
  id: number;
  name: string;
  content: string;
  create_date: string;
  update_date: string;
  view_number: number | null;
  thumbnail_id: number;
  thumbnail_url: string;
  author_id: number;
  author: string;
}

export interface typeData {
  id: number;
  name: string;
  template?: string;
}

export interface popUpData {
  type: string;
  item?: NewsList;
}

export interface imageDetailList {
  id?: number;
  name?: string;
  url?: string | ArrayBuffer;
}
