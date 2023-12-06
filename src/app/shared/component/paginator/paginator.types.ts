export interface paginatorData {
  length: number;
  limit: number;
  offset: number;
  page?: number;
}

export interface pageList {
  pageIndex: number;
  active: boolean;
}
