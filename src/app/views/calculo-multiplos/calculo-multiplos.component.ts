import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculo-multiplos',
  templateUrl: './calculo-multiplos.component.html',
  styleUrls: ['./calculo-multiplos.component.scss']
})
export class CalculoMultiplosComponent implements OnInit {

  formValid = true;
  invalidoNro1 = false;
  invalidoNro2 = false;
  invalidoOper = false;
  resultado = 0;

  _form: FormGroup = this.formBuilder.group({
    valor1: ['', [Validators.required, Validators.minLength(5)]],
    valor2: ['', [Validators.required, Validators.minLength(5)]],
    oper: ['', [Validators.required, Validators.maxLength(1)]]

  })

  constructor(
    private formBuilder: FormBuilder) { }


  submit() {
    console.log(this._form.value)
    if (this._form.valid) {
      console.log(this._form.valid)
      this.resultado = eval(this._form.value.valor1 + this._form.value.oper + this._form.value.valor2);
    }
    else {
      if (this._form.value.valor1 == '') {
        this.invalidoNro1 = true;
      }
      else {
        this.invalidoNro1 = false;
      }
      if (this._form.value.valor2 == '') {
        this.invalidoNro2 = true;
      } else {
        this.invalidoNro2 = false;
      }
      if (this._form.value.oper !== '+' && this._form.value.oper !== '-' && this._form.value.oper !== '*' && this._form.value.oper !== '/') {
        this.invalidoOper = true;
      } else {
        this.invalidoOper = false;
      }
      alert('Cálculo com problema')


    }
  }

  acaoLimpar() {
    this._form.setValue({
      valor1 : '',
      valor2 : '',
      oper : ''
  
    })
    this.resultado = 0;
  }

  ngOnInit(): void {


  }

}
