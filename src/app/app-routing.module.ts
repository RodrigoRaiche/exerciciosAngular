import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InputBuscaComponent} from './views/input-busca/input-busca.component';
import { CalculoMultiplosComponent } from './views/calculo-multiplos/calculo-multiplos.component';
import { SistemaAvaliacaoComponent } from './views/sistema-avaliacao/sistema-avaliacao.component';
import { TestaAPIComponent } from './views/testa-api/testa-api.component';
import { LoadingTelaComponent } from './views/loading-tela/loading-tela.component';
import { FilmeMaisPopularComponent } from './views/filme-mais-popular/filme-mais-popular.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inputBusca',
    component: InputBuscaComponent
  },
  {
    path: 'calculoMultiplos',
    component: CalculoMultiplosComponent
  },
  {
    path: 'avaliacao',
    component: SistemaAvaliacaoComponent
  },
  {
    path: 'testaAPI',
    component: TestaAPIComponent
  },
  {
    path: 'loading',
    component: LoadingTelaComponent
  },
  {
    path: 'filmePopular',
    component: FilmeMaisPopularComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
