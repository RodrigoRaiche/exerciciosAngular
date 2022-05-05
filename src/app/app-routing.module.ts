import { FullComponent } from './layout/full/full.component';
import { MenuComponent } from './components/menu/menu.component';
import { BuscaComponent } from './components/busca/busca.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InputBuscaComponent} from './views/input-busca/input-busca.component';
import { CalculoMultiplosComponent } from './views/calculo-multiplos/calculo-multiplos.component';
import { SistemaAvaliacaoComponent } from './views/sistema-avaliacao/sistema-avaliacao.component';
import { TestaAPIComponent } from './views/testa-api/testa-api.component';
import { LoadingTelaComponent } from './views/loading-tela/loading-tela.component';
import { FilmeMaisPopularComponent } from './views/filme-mais-popular/filme-mais-popular.component';
import { HomeGeralComponent } from './views/home-geral/home-geral.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'full',
    pathMatch: 'full'
  },
  {
    path: 'full', component: FullComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'calculoMultiplos', component: CalculoMultiplosComponent },
      { path: 'avaliacao', component: SistemaAvaliacaoComponent },
      ]
  
  },

];  

/*
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
  },
  {
    path: 'home',
    component: HomeGeralComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },

];
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
