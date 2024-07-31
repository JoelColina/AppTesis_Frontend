import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

import { TitlePipePipe } from './../../core/pipe/title.pipe.pipe';

import { NavigationComponent } from './../../core/components/navigation/navigation.component';
import { UpperStringPipe } from '../../core/pipe/upper-string.pipe';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterOutlet, TitlePipePipe, NavigationComponent, UpperStringPipe, DashboardComponent  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'retail';
}
