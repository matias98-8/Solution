import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public contactForm: FormGroup;

  
  login = {email: null, password: null};
  constructor(private loginService: UserService) {
    this.contactForm = this.createForm();
  }
  public loginUsuario(): any {
    console.log("1 "+this.login);
    console.log("2 "+this.login.email);
    console.log("3 "+this.login.password);
    console.log("4 "+this.loginService);
    this.loginService.loginUsuario(this.login).subscribe(
      datos => {
        console.log(datos);
      });
  }

  get email(): AbstractControl{
    return this.contactForm.get('email');
  }

  get password(): AbstractControl {
    return this.contactForm.get('password');
  }

  createForm(): FormGroup {
    return new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
      });
  }








  ngOnInit(): void {
  }

//   private buildForm() {
//     this.form = this.formBuilder.group({
    
//       email: ['', [Validators.required, Validators.email]],
//       password:['',[Validators.required]],
      
//     });

//   }

//   save(event: Event) {
//     event.preventDefault();
//     if (this.form.valid) {
//       const value = this.form.value;
//       console.log(value);
//       console.log(this.login.email);
//     } else {
//       this.form.markAllAsTouched();
//     }
//   }
  onResetForm(): void {
     this.contactForm.reset();
   }
  
   onSaveForm(): void {
    if (this.contactForm.valid) { this.onResetForm(); }
   }

   get emailField(){
     return this.contactForm.get('email');
   }

  get emailFieldIsInvalid(){
     return this.emailField.touched && this.emailField.invalid;
  }


   get emailFieldIsValid(){
     return this.emailField.touched && this.emailField.valid;
   }
  
 doSomething() {
  console.log('click');
 }

}
