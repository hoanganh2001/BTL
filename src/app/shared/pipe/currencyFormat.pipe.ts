import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number): any {
    return value.toLocaleString().replaceAll(',', '.');
  }
}

@Pipe({
  name: 'countDateToNow',
})
export class CountDateToNowPipe implements PipeTransform {
  transform(value: string): any {
    dayjs.extend(relativeTime);

    return dayjs(value).fromNow();
  }
}
