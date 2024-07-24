import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './pipe/currency.pipe';
import { TitlePipe } from './pipe/title.pipe';
import { SubtitlePipe } from './pipe/subtitle.pipe';
import { DatePipe } from './pipe/date.pipe';
import { EmailPipe } from './pipe/email.pipe';
import { RutPipe } from './pipe/rut.pipe';



@NgModule({
  declarations: [
    CurrencyPipe,
    TitlePipe,
    SubtitlePipe,
    DatePipe,
    EmailPipe,
    RutPipe,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyPipe,
    TitlePipe,
    SubtitlePipe,
    DatePipe,
    EmailPipe,
    RutPipe,
  ],
})
export class CoreModule { }
