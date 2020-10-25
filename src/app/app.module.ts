import { RouterModule } from "@angular/router"
import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { CadastroPetService } from "./presentation/pages/cadastro-pet/cadastro-pet.service"
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
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
import { HomeUsuarioComponent } from "./presentation/pages/home/home-usuario/home-usuario.component"
import { HomeAnfitriaoComponent } from "./presentation/pages/home/home-anfitriao/home-anfitriao.component"
import { RequestForgotPasswordComponent } from "./presentation/pages/user/forgot-password/request-forgot-password/request-forgot-password.component"
import { RequestForgotPasswordUseCase } from "./domain/use_cases/user/forgot_password/request_forgot_pasword/request_forgot_pasword_use_case"
import { ResetPasswordComponent } from "./presentation/pages/user/forgot-password/reset-password/reset-password.component"
import { ResetPasswordUseCase } from "./domain/use_cases/user/forgot_password/reset_password/reset_password_use_case";
import { MeusPetsComponent } from './presentation/pages/meus-pets/meus-pets.component'
import { PasseiosComponent } from "./presentation/pages/passeios/passeios.component"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    CadastroAnfitriaoComponent,
    CadastroPetComponent,
    HomeComponent,
    HomeUsuarioComponent,
    HomeAnfitriaoComponent,
    RequestForgotPasswordComponent,
    ResetPasswordComponent,
    PasseiosComponent,
    MeusPetsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    CadastroPetService,
    RegisterUserUseCase,
    LoginUseCase,
    RequestForgotPasswordUseCase,
    ResetPasswordUseCase,
    ConfirmationService,
    { provide: UserRepositoryToken, useClass: RemoteUserRepository },
    { provide: StorageToken, useClass: NativeStorageProvider },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
