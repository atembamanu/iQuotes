import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class CountDatePipe implements PipeTransform {


  transform(value: any): number {
    const today: any = new Date();

    const difference = Math.abs(today - value);
    const secondsPerDay = 86400;

    const dateDifferenceSeconds = difference * 0.001;

    const dateCount = Math.round(dateDifferenceSeconds / secondsPerDay);


    if (dateCount >= 1) {
      // if (dateCount < 1) {
      //   return 'Less than a day ago';
      // } else {
        return dateCount - 1;
    } else {
      return 0;
    }
  }

}
