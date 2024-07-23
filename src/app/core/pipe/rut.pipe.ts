import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rut'
})
export class RutPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
