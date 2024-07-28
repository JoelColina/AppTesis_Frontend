import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 loginForm : FormGroup;


 constructor(private fb: FormBuilder) {
  this.loginForm = this.fb.group({
    username: ['', Validators.required ],
    password: ['',[
      Validators.required,
      Validators.minLength(12),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
    ]]
  });
 }
onSubmit():void{
  if(this.loginForm.valid){
    console.log(`Form Submitted ${this.loginForm.value}`);
  } else {
    console.log(`Formis Not  Submitted`);
  }
}
}
