import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtitle'
})
export class SubtitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
