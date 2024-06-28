import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPipe'
})
export class SplitPipePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return '';
    return value.split('T')[0];
  }

}
