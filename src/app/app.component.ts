import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlePipePipe } from './core/pipe/title.pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitlePipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'retail';
}
