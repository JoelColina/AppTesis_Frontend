import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe',
  standalone: true
})
export class EmailPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
