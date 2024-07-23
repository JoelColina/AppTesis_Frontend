import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { ClientComponent } from './client/client.component';
import { AcountComponent } from './acount/acount.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     MenuComponent,
     CardComponent,
     ClientComponent,
     AcountComponent,


    ]
})
export class PagesModule { }
