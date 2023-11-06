import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value?: number): string {
    if (!value) return 'giá đang cập nhật';
    return value.toLocaleString().replaceAll(',', '.') + ' ₫';
  }
}
