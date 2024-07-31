import { Component } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Client2Component } from './pages/client2/client2.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,LoginComponent, RouterOutlet, DashboardComponent, Client2Component,HomeComponent   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
