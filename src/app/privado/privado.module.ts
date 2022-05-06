import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivadoRoutingModule } from './privado-routing.module';
import { SerieComponent } from './views/serie/serie.component';
import { Home2Component } from './views/home2/home2.component';


@NgModule({
  declarations: [
    SerieComponent,
    Home2Component
  ],
  imports: [
    CommonModule,
    PrivadoRoutingModule
  ]
})
export class PrivadoModule { }
