import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';

import {debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }
  
  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['',  [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    //this.form.valueChanges
    //  .pipe(
    //  debounceTime(500)
    //)
    //.subscribe(value => {
    //  console.log(value);
    //});
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get emailField(){
    return this.form.get('email');
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
