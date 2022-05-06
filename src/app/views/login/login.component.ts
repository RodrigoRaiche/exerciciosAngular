import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LiberaLoginService } from 'src/app/services/libera-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  formValid = true;

  _form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    senha: ['', [Validators.required, Validators.minLength(6)]]

  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private liberaLogin: LiberaLoginService) { }



  submit() {
    if (this._form.valid) {
      this.liberaLogin.setlogin(true);
      this.router.navigate(['/full/avaliacao'])
    }
    else {
      alert('Formulário inválido')
    }
  }

  ngOnInit(): void {


  }

}
