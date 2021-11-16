import { Component, OnInit } from '@angular/core';
import { MyValidations } from '../../utils/my-validations';
import { FormControl, FormBuilder,FormGroup, Validators, AbstractControl } from '@angular/forms';
import { pipe } from 'rxjs';
import { UserService } from '../../service/user/user.service';

import {debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  
  public contactForm: FormGroup;

 
  login = {email: null, password: null, name: null, date: null,category: null, gender: null,};
  constructor(private loginService: UserService) {
    this.contactForm = this.createForm();
  }
  public loginUsuario(): any {
    console.log("1 "+this.login);
    console.log("2 "+this.login.email);
    console.log("3 " + this.login.password);
    console.log("4 "+this.login.name);
    console.log("5 " + this.login.date);
    console.log("6 "+this.login.category);
    console.log("7 "+this.login.gender);
    console.log("8 " + this.loginService);
    
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
  
  get name(): AbstractControl {
    return this.contactForm.get('name');
  }

  get date(): AbstractControl {
    return this.contactForm.get('date');
  }

  get category(): AbstractControl {
    return this.contactForm.get('category');
  }

  get gender(): AbstractControl {
    return this.contactForm.get('gender');
  }




  createForm(): FormGroup {
    return new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
        name: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required, MyValidations.isYounger]),
        category: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
      });
  }

  

  //form: FormGroup;
  //constructor(private formBuilder: FormBuilder,
   // private userService: UserService
  //) {
   // this.buildForm();
  //}
  
  ngOnInit(): void {
  }

  //private buildForm() {
    //this.form = this.formBuilder.group({
     // name: ['',  [Validators.required]],
     // date: ['', [Validators.required, MyValidations.isYounger]],
     // email: ['', [Validators.required, Validators.email]],
     // category: ['', [Validators.required]],
     // gender: ['', [Validators.required]],
     // password: ['', [Validators.required]],
   // });

    //this.form.valueChanges
    //  .pipe(
    //  debounceTime(500)
    //)
    //.subscribe(value => {
    //  console.log(value);
    //});
  //}

  //save(event: Event) {
   // event.preventDefault();
   // if (this.form.valid) {
    //  const value = this.form.value;
    //  console.log(value);
   // } else {
    //  this.form.markAllAsTouched();
   // }
  //}

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
