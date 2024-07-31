import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { LoginModel } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   private login!: LoginModel;

   constructor (
    private logger:Logger ) { }


   getValidationLogin (login:LoginModel) {
    this.logger.log(this.login);

   /* this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;*/
  }



}
