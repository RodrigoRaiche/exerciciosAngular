import { FullComponent } from './layout/full/full.component';
import { MenuComponent } from './components/menu/menu.component';
import { BuscaComponent } from './components/busca/busca.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { InputBuscaComponent } from './views/input-busca/input-busca.component';
import { CalculoMultiplosComponent } from './views/calculo-multiplos/calculo-multiplos.component';
import { SistemaAvaliacaoComponent } from './views/sistema-avaliacao/sistema-avaliacao.component';
import { TestaAPIComponent } from './views/testa-api/testa-api.component';
import { LoadingTelaComponent } from './views/loading-tela/loading-tela.component';
import { FilmeMaisPopularComponent } from './views/filme-mais-popular/filme-mais-popular.component';
import { HomeGeralComponent } from './views/home-geral/home-geral.component';
import { EsqueciSenhaComponent } from './components/esqueci-senha/esqueci-senha.component';
import { ContentComponent } from './layout/content/content.component';
import { AuthGuard } from './services/guard/auth.guard';
import { InformarEmailComponent } from './components/informar-email/informar-email.component';
import { Login2Component } from './publico/views/login2/login2.component';
import { EsqueciSenha2Component } from './publico/views/esqueci-senha2/esqueci-senha2.component';
import { Page404Component } from './publico/views/page404/page404.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio', component: HomeComponent,

  }, 

  {
    path: 'login', component: Login2Component,

  }, 
  {
    path: 'esquecisenha2', component: EsqueciSenha2Component,

  }, 
  {
    path: 'informaremail', component: InformarEmailComponent,

  }, 
  {
    path: 'privado',
    loadChildren: () => import('./privado/privado.module').then(m =>
      m.PrivadoModule)
  }, 
  {
    path: 'home', component: ContentComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'esquecisenha', component: EsqueciSenhaComponent },
    ]

  },

  {
    path: 'full', component: FullComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      { path: 'loading', component: LoadingTelaComponent },
      { path: 'calculoMultiplos', component: CalculoMultiplosComponent },
      { path: 'avaliacao', component: SistemaAvaliacaoComponent },
    ]

  },
  {
    path: '**', component: Page404Component,

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
