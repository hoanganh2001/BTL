import { ResponseCodeEnum } from '../enums/response-code.enums';

export class BaseResponse<T> {
  data?: T[];
  meta?: MetaResponse;
}

export interface MetaResponse {
  limit: number;
  offset: number;
  length: number;
}
