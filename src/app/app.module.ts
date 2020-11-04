import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouteReuseStrategy, RouterModule } from "@angular/router"

import { IonicModule, IonicRouteStrategy } from "@ionic/angular"
import { SplashScreen } from "@ionic-native/splash-screen/ngx"
import { StatusBar } from "@ionic-native/status-bar/ngx"
import { ConfirmDialogModule } from "primeng/confirmdialog"
import { DialogModule } from "primeng/dialog"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { NgbModule } from "@ng-bootstrap/ng-bootstrap"
import { ConfirmationService } from "primeng/api"
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"
import { NativeStorage } from "@ionic-native/native-storage/ngx"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { File } from "@ionic-native/file/ngx"
import { Camera } from "@ionic-native/camera/ngx"
import { AppComponent } from "./app.component"
import { AppRoutingModule } from "./app-routing.module"
import { StorageToken } from "./domain/providers/storage"
import { HostRepositoryToken } from "./domain/repositories/host_repository"
import { PetRepositoryToken } from "./domain/repositories/pet_repository"
import { TourRepositoryToken } from "./domain/repositories/tour_repository"
import { UserRepositoryToken } from "./domain/repositories/user_repository"
import { BlockHostUseCase } from "./domain/use_cases/host/block_host/block_host_use_case"
import { CreateHostUseCase } from "./domain/use_cases/host/create_host/create_host_use_case"
import { CreatePetUseCase } from "./domain/use_cases/pet/create_pet/create_pet_use_case"
import { GetTourFeedUseCase } from "./domain/use_cases/tour/get_tour_feed/get_tour_feed_use_case"
import { CreateUserUseCase } from "./domain/use_cases/user/create_user/create_user_use_case"
import { RequestForgotPasswordUseCase } from "./domain/use_cases/user/forgot_password/request_forgot_pasword/request_forgot_pasword_use_case"
import { ResetPasswordUseCase } from "./domain/use_cases/user/forgot_password/reset_password/reset_password_use_case"
import { LoginUseCase } from "./domain/use_cases/user/login/login_use_case"
import { HttpErrorInterceptor } from "./infra/http/error_interceptor"
import { NativeStorageProvider } from "./infra/providers/native_storage_provider"
import { RemoteHostRepository } from "./infra/repositories/host_repository"
import { RemotePetRepository } from "./infra/repositories/pet_repository"
import { RemoteTourRepository } from "./infra/repositories/tour_repository"
import { RemoteUserRepository } from "./infra/repositories/user_repository"
import { AgendamentosComponent } from "./presentation/pages/agendamentos/agendamentos.component"
import { CadastroAnfitriaoComponent } from "./presentation/pages/cadastro-anfitriao/cadastro-anfitriao.component"
import { CadastroPetComponent } from "./presentation/pages/cadastro-pet/cadastro-pet.component"
import { HomeAnfitriaoComponent } from "./presentation/pages/home/home-anfitriao/home-anfitriao.component"
import { HomeUsuarioComponent } from "./presentation/pages/home/home-usuario/home-usuario.component"
import { HomeComponent } from "./presentation/pages/home/home.component"
import { MeusPetsComponent } from "./presentation/pages/meus-pets/meus-pets.component"
import { PasseiosComponent } from "./presentation/pages/passeios/passeios.component"
import { SolicitacoesComponent } from "./presentation/pages/solicitacoes/solicitacoes.component"
import { RequestForgotPasswordComponent } from "./presentation/pages/user/forgot-password/request-forgot-password/request-forgot-password.component"
import { ResetPasswordComponent } from "./presentation/pages/user/forgot-password/reset-password/reset-password.component"
import { LoginComponent } from "./presentation/pages/user/login/login.component"
import { RegisterUserComponent } from "./presentation/pages/user/register/register.component"

@NgModule({
  entryComponents: [],
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
    AgendamentosComponent,
    SolicitacoesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ConfirmDialogModule,
    DialogModule,
    NgbModule,
  ],
  providers: [
    File,
    Camera,
    NativeStorage,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    CreateUserUseCase,
    LoginUseCase,
    RequestForgotPasswordUseCase,
    ResetPasswordUseCase,
    ConfirmationService,
    CreatePetUseCase,
    CreateHostUseCase,
    GetTourFeedUseCase,
    BlockHostUseCase,
    { provide: UserRepositoryToken, useClass: RemoteUserRepository },
    { provide: StorageToken, useClass: NativeStorageProvider },
    { provide: PetRepositoryToken, useClass: RemotePetRepository },
    { provide: HostRepositoryToken, useClass: RemoteHostRepository },
    { provide: TourRepositoryToken, useClass: RemoteTourRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
