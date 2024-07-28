import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperString',
  standalone: true
})
export class UpperStringPipe implements PipeTransform {

  transform(value:string    ): unknown {
    return value .toLocaleUpperCase();
  }

}
