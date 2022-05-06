import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBuscaComponent } from './views/input-busca/input-busca.component';
import { CalculoMultiplosComponent } from './views/calculo-multiplos/calculo-multiplos.component';
import { SistemaAvaliacaoComponent } from './views/sistema-avaliacao/sistema-avaliacao.component';
import { TestaAPIComponent } from './views/testa-api/testa-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ComunicaAPIService } from './services/comunica-api.service';
import { LoadingTelaComponent } from './views/loading-tela/loading-tela.component';
import { FilmeMaisPopularComponent } from './views/filme-mais-popular/filme-mais-popular.component';
import { BuscaComponent } from './components/busca/busca.component';
import { HomeGeralComponent } from './views/home-geral/home-geral.component';
import { MenuComponent } from './components/menu/menu.component';
import { FullComponent } from './layout/full/full.component';
import { ContentComponent } from './layout/content/content.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { InformarEmailComponent } from './components/informar-email/informar-email.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputBuscaComponent,
    CalculoMultiplosComponent,
    SistemaAvaliacaoComponent,
    TestaAPIComponent,
    LoadingTelaComponent,
    FilmeMaisPopularComponent,
    BuscaComponent,
    HomeGeralComponent,
    MenuComponent,
    FullComponent,
    ContentComponent,
    EsqueciSenhaComponent,
    InformarEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ComunicaAPIService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
