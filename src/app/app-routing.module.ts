import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { MeusPetsComponent } from "./presentation/pages/meus-pets/meus-pets.component"
import { HomeComponent } from "./presentation/pages/home/home.component"
import { CadastroAnfitriaoComponent } from "./presentation/pages/cadastro-anfitriao/cadastro-anfitriao.component"

import { LoginComponent } from "./presentation/pages/user/login/login.component"
import { CadastroPetComponent } from "./presentation/pages/cadastro-pet/cadastro-pet.component"
import { RegisterUserComponent } from "./presentation/pages/user/register/register.component"
import { RequestForgotPasswordComponent } from "./presentation/pages/user/forgot-password/request-forgot-password/request-forgot-password.component"
import { ResetPasswordComponent } from "./presentation/pages/user/forgot-password/reset-password/reset-password.component"
import { PasseiosComponent } from "./presentation/pages/passeios/passeios.component"
import { AgendamentosComponent } from "./presentation/pages/agendamentos/agendamentos.component"

const routes: Routes = [
  {
    path: "request-forgot-password",
    component: RequestForgotPasswordComponent,
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
  },
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: RegisterUserComponent },
  { path: "cadastro-anfitriao", component: CadastroAnfitriaoComponent },
  { path: "cadastro-pet", component: CadastroPetComponent },
  { path: "home", component: HomeComponent },
  { path: "pets", component: MeusPetsComponent },
  { path: "passeios", component: PasseiosComponent },
  { path: "agendamentos", component: AgendamentosComponent },
  { path: "**", redirectTo: "/login" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
