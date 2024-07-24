import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';
import { ClientComponent } from './client/client.component';
import { AcountComponent } from './acount/acount.component';
import { ReportsAcountComponent } from './components/reports-acount/reports-acount.component';
import { PurchasingReportComponent } from './components/purchasing-report/purchasing-report.component';
import { CustomerReportComponent } from './components/customer-report/customer-report.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     MenuComponent,
     CardComponent,
     ClientComponent,
     AcountComponent,
     ReportsAcountComponent,
     PurchasingReportComponent,
     CustomerReportComponent

    ]
})
export class PagesModule { }
