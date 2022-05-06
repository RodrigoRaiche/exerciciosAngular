import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    EventEmitterService.get('Submit')
    .subscribe((value: any) => {
      if (value == '') {
        alert('Favor informar o E-mail')
        return;
      }
      alert('E-mail foi alterado')

    })

  }

}
