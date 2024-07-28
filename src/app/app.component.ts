import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlePipePipe } from './core/pipe/title.pipe.pipe';
import { LoginComponent } from './pages/login/login.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitlePipePipe,LoginComponent,NavigationComponent,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retail';
}
