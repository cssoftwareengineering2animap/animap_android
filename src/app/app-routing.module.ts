import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { CadastroAnfitriaoComponent } from "./cadastro-anfitriao/cadastro-anfitriao.component"
import { CadastroComponent } from "./cadastro/cadastro.component"
import { LoginComponent } from "./login/login.component"
import { CadastroPetComponent } from "./cadastro-pet/cadastro-pet.component"

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
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
