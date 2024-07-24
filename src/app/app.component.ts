import { Component } from '@angular/core';
import { Mode } from './core/enums/mode.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retail';
  checked = false;
  disabled = false;
  mode =Mode
}
