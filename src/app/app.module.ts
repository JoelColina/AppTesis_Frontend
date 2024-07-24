import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';





import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from "./pages/login/login.component";


@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatSlideToggleModule,
    CoreModule,
    LoginComponent
],
  providers: [],
  bootstrap: []
})
export class AppModule { }
