import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correncyConvertor',
})
export class CorrencyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): number {
    if (args.length) {
      return value * args[0];
    } else {
      return value * 90;
    }
  }
}
