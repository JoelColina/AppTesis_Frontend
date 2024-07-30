import { Component,Input,signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 loginForm : FormGroup;
 @Input() error: string | null = '';
 hide = signal(true);
 form: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
});

 constructor(private fb: FormBuilder) {
  this.loginForm = this.fb.group({
    username: ['', Validators.required, Validators.email ],
    password: ['',[ Validators.required, Validators.minLength(12),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/)
    ]]
  });


 }

 clickEvent(event: MouseEvent) {
  this.hide.set(!this.hide());
  event.stopPropagation();
}
 onSubmit():void{
  if(this.loginForm.valid){
    console.log(`Form Submitted ${this.loginForm.value}`);

  } else {
    console.log(`Formis Not  Submitted`);
  }
}

}
