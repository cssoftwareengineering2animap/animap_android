import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./presentation/pages/home/home.component"
import { CadastroAnfitriaoComponent } from "./presentation/pages/cadastro-anfitriao/cadastro-anfitriao.component"

import { LoginComponent } from "./presentation/pages/user/login/login.component"
import { CadastroPetComponent } from "./presentation/pages/cadastro-pet/cadastro-pet.component"
import { RegisterUserComponent } from "./presentation/pages/user/register/register.component"

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: RegisterUserComponent },
  { path: "cadastro-anfitriao", component: CadastroAnfitriaoComponent },
  { path: "cadastro-pet", component: CadastroPetComponent },
  { path: "home", component: HomeComponent },
  { path: "**", redirectTo: "/login" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
