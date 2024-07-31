import { Component, inject , Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {UpperStringPipe} from './../../pipe/upper-string.pipe'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule, MatButtonModule, MatSidenavModule,
    MatListModule, MatIconModule, AsyncPipe,
    UpperStringPipe, MatSlideToggleModule, FormsModule
  ]
})
export class NavigationComponent {
  @Input() title: string  ='';
  isChecked = false;



    toggleTheme(): void {
      if (!this.isChecked){
       document.body.classList.remove('dark-theme');
       document.body.classList.add('light-theme');
      } else {
       document.body.classList.remove('light-theme');
       document.body.classList.add('dark-theme');
      }
       }
}
