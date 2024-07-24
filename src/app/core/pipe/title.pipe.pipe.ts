import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe',
  standalone: true
})
export class TitlePipePipe implements PipeTransform {

  transform(value:string ): string  {
    return value.toUpperCase();
  }

}
