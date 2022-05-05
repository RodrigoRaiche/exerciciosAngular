import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


 formValid = true;

 _form: FormGroup = this.formBuilder.group({
    usuario: ['', [Validators.minLength(5)]],
    senha: ['', [ Validators.minLength(8)]]

  })

  constructor(
    private formBuilder: FormBuilder) { }


submit() {
  console.log(this._form.value)
  if (this._form.valid) {
    console.log(this._form.valid)
  }
  else {
    alert('Formulário inválido')
  }
}

ngOnInit(): void {


}

}
