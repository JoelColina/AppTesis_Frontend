import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rutPipe',
  standalone: true
})
export class RutPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
