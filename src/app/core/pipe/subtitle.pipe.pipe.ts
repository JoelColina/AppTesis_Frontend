import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtitlePipe',
  standalone: true
})
export class SubtitlePipePipe implements PipeTransform {

  transform(value : string ): string  {
    return value.toLocaleUpperCase();
  }

}
