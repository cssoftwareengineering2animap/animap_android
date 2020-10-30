import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './presentation/pages/agendamentos/agendamentos.component';
import { CadastroAnfitriaoComponent } from './presentation/pages/cadastro-anfitriao/cadastro-anfitriao.component';
import { CadastroPetComponent } from './presentation/pages/cadastro-pet/cadastro-pet.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { MeusPetsComponent } from './presentation/pages/meus-pets/meus-pets.component';
import { PasseiosComponent } from './presentation/pages/passeios/passeios.component';
import { SolicitacoesComponent } from './presentation/pages/solicitacoes/solicitacoes.component';
import { ResetPasswordComponent } from './presentation/pages/user/forgot-password/reset-password/reset-password.component';
import { LoginComponent } from './presentation/pages/user/login/login.component';
import { RegisterUserComponent } from './presentation/pages/user/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'passeios',
    pathMatch: 'full'
  },
  { 
    path: "login", component: LoginComponent },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
  { path: "cadastro", component: RegisterUserComponent },
  { path: "cadastro-anfitriao", component: CadastroAnfitriaoComponent },
  { path: "cadastro-pet", component: CadastroPetComponent },
  { path: "home", component: HomeComponent },
  { path: "pets", component: MeusPetsComponent },
  { path: "passeios", component: PasseiosComponent },
  { path: "agendamentos", component: AgendamentosComponent },
  { path: "solicitacoes", component: SolicitacoesComponent },
  { path: "**", redirectTo: "/login" },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
