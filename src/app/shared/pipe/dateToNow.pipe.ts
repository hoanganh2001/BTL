import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Pipe({
  name: 'dateToNow',
})
export class DateToNowPipe implements PipeTransform {
  transform(value: string): any {
    dayjs.extend(relativeTime);

    return dayjs(value)
      .fromNow()
      .replace('ago', 'trước')
      .replace('days', 'ngày')
      .replace('a', '1')
      .replace('months', 'tháng')
      .replace('month', 'tháng')
      .replace('years', 'năm')
      .replace('year', 'năm');
  }
}