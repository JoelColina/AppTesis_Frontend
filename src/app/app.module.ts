import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcountComponent } from './pages/acount/acount/acount.component';
import { CardComponent } from './pages/card/card/card.component';
import { ClientComponent } from './pages/client/client.component';
import { ReportsAcountComponent } from './pages/components/reports-acount/reports-acount.component';
import { PurchasingReportComponent } from './pages/components/purchasing-report/purchasing-report.component';
import { CustomerReportComponent } from './pages/components/customer-report/customer-report.component';

@NgModule({
  declarations: [
    AppComponent,
    AcountComponent,
    CardComponent,
    ClientComponent,
    ReportsAcountComponent,
    PurchasingReportComponent,
    CustomerReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
