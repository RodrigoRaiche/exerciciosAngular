import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-sistema-avaliacao',
  templateUrl: './sistema-avaliacao.component.html',
  styleUrls: ['./sistema-avaliacao.component.scss']
})
export class SistemaAvaliacaoComponent implements OnInit {

  registerForm: FormGroup = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    nomeFilme: ['', [Validators.required, Validators.minLength(3)]],
    avaliacao: ['', [Validators.required, Validators.maxLength(2), Validators.min(1), Validators.max(10)]]
  })

  submitted = false;
  resultado = '';

  constructor(
    private formBuilder: FormBuilder) { }


  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value)
    if (this.registerForm.valid) {
      this.resultado = `Olá,${this.registerForm.value.nome}. Você avaliou o filme ${this.registerForm.value.nomeFilme} com nota ${this.registerForm.value.avaliacao}. Obrigado`
    }
    else {
      this.resultado = ''
    }
  }


  acaoLimpar() {
    this.registerForm.setValue({
      nome: '',
      email: '',
      nomeFilme: '',
      avaliacao: ''

    })
    this.resultado = '';
    this.submitted = false;
  }

  ngOnInit(): void {


  }

}
