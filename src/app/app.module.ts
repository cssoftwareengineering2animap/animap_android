import { RouterModule } from "@angular/router"
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"
import { LoginService } from "./login/login.service"
import { CadastroPetService } from "./cadastro-pet/cadastro-pet.service"
import { CadastroService } from "./cadastro/cadastro.service"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { LoginComponent } from "./login/login.component"
import { CadastroComponent } from "./cadastro/cadastro.component"
import { CadastroAnfitriaoComponent } from "./cadastro-anfitriao/cadastro-anfitriao.component"
import { CadastroPetComponent } from "./cadastro-pet/cadastro-pet.component"
import { HomeComponent } from "./home/home.component"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    CadastroAnfitriaoComponent,
    CadastroPetComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [CadastroService, CadastroPetService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
