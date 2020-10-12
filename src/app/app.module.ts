import { RouterModule } from "@angular/router"
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { LoginService } from "./presentation/pages/user/login/login.service"
import { CadastroPetService } from "./presentation/pages/cadastro-pet/cadastro-pet.service"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { LoginComponent } from "./presentation/pages/user/login/login.component"

import { CadastroAnfitriaoComponent } from "./presentation/pages/cadastro-anfitriao/cadastro-anfitriao.component"
import { CadastroPetComponent } from "./presentation/pages/cadastro-pet/cadastro-pet.component"
import { HomeComponent } from "./presentation/pages/home/home.component"
import { RegisterUserComponent } from "./presentation/pages/user/register/register.component"
import { RegisterUserUseCase } from "./domain/use_cases/user/create_user/register_user_use_case"
import { HttpErrorInterceptor } from "./infra/http/error_interceptor"
import { UserRepositoryToken } from "./domain/repositories/user_repository"
import { RemoteUserRepository } from "./infra/repositories/user_repository"
import { StorageToken } from "./domain/providers/storage"
import { NativeStorageProvider } from "./infra/providers/native_storage_provider"
import { LoginUseCase } from "./domain/use_cases/user/login/login_use_case"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    CadastroPetService,
    LoginService,
    RegisterUserUseCase,
    LoginUseCase,
    { provide: UserRepositoryToken, useClass: RemoteUserRepository },
    { provide: StorageToken, useClass: NativeStorageProvider },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
