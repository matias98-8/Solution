import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { pipe } from 'rxjs';

import {debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-caso-devolucion',
  templateUrl: './caso-devolucion.component.html',
  styleUrls: ['./caso-devolucion.component.css']
})
export class CasoDevolucionComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      tienda: ['',  [Validators.required]],
      tipoproducto: ['', [Validators.required]],
      motivodedevolucion: ['', [Validators.required]],
      text: ['', [Validators.required]],
      metododevolucion: ['', [Validators.required]],
      comuna: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipovivienda: ['', [Validators.required]],
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
