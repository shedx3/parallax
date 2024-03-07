import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, number:number): string {
   if (!value) return ''

   const arrayCount = value.split(' ')
   if(arrayCount.length <= number) {
    return value
   }
  
  return  arrayCount.slice(0,number).join(' ') + '...';
   
  }

}
