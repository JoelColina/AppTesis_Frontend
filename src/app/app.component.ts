import { Component } from '@angular/core';
import { Mode } from './core/enums/mode.enum';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'retail';
  checked = false;
  disabled = false;
  mode= Mode;
  modetheme: string =this.mode.light.toString();


  checkedaction():void{
    if (this.modetheme = this.mode.light){
       this.modetheme =  this.mode.dark.toString()
    } else {
      this.modetheme =  this.mode.light.toString()
    }

  }




}

