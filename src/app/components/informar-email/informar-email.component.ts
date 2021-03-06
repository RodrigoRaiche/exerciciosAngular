import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-informar-email',
  templateUrl: './informar-email.component.html',
  styleUrls: ['./informar-email.component.scss']
})
export class InformarEmailComponent implements OnInit {

  _form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  })


  constructor(private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit(): void {
  }

  submit() {
    EventEmitterService.get('Submit').emit(this._form.value.email);
    if (this._form.valid) {
      localStorage.setItem('email', this._form.value.email)
      this.router.navigate(['/inicio'])
    }
    else {
      alert('Formulário inválido')
    }
  }


}
