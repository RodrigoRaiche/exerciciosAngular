import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sistema-avaliacao',
  templateUrl: './sistema-avaliacao.component.html',
  styleUrls: ['./sistema-avaliacao.component.scss']
})
export class SistemaAvaliacaoComponent implements OnInit {


  formValid = true;
  resultado = '';

  _form: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required]],
    nomeFilme: ['', [Validators.required, Validators.minLength(5)]],
    avaliacao: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(10)]]
  })


  constructor(
    private formBuilder: FormBuilder) { }

  submit() {
    console.log(this._form.value)
    if (this._form.valid) {
       this.resultado = `Você avaliou o filme ${this._form.value.nomeFilme}` 
    }
    else{
      this.resultado = ''  
    }
  }


  acaoLimpar() {
    this._form.setValue({
      nome: '',
      email: '',
      nomeFilme: '',
      avaliacao: ''

    })
    this.resultado = '';
  }

  ngOnInit(): void {


  }

}
