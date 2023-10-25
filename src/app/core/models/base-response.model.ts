import { ResponseCodeEnum } from '../enums/response-code.enums';

export class BaseResponse<T> {
  data?: T[];
  meta?: any;
}
