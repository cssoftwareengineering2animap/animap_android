"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var cadastro_pet_service_1 = require("./presentation/pages/cadastro-pet/cadastro-pet.service");
var confirmdialog_1 = require("primeng/confirmdialog");
var api_1 = require("primeng/api");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./presentation/pages/user/login/login.component");
var cadastro_anfitriao_component_1 = require("./presentation/pages/cadastro-anfitriao/cadastro-anfitriao.component");
var cadastro_pet_component_1 = require("./presentation/pages/cadastro-pet/cadastro-pet.component");
var home_component_1 = require("./presentation/pages/home/home.component");
var register_component_1 = require("./presentation/pages/user/register/register.component");
var register_user_use_case_1 = require("./domain/use_cases/user/create_user/register_user_use_case");
var error_interceptor_1 = require("./infra/http/error_interceptor");
var user_repository_1 = require("./domain/repositories/user_repository");
var user_repository_2 = require("./infra/repositories/user_repository");
var storage_1 = require("./domain/providers/storage");
var native_storage_provider_1 = require("./infra/providers/native_storage_provider");
var login_use_case_1 = require("./domain/use_cases/user/login/login_use_case");
var home_usuario_component_1 = require("./presentation/pages/home/home-usuario/home-usuario.component");
var home_anfitriao_component_1 = require("./presentation/pages/home/home-anfitriao/home-anfitriao.component");
var request_forgot_password_component_1 = require("./presentation/pages/user/forgot-password/request-forgot-password/request-forgot-password.component");
var request_forgot_pasword_use_case_1 = require("./domain/use_cases/user/forgot_password/request_forgot_pasword/request_forgot_pasword_use_case");
var reset_password_component_1 = require("./presentation/pages/user/forgot-password/reset-password/reset-password.component");
var reset_password_use_case_1 = require("./domain/use_cases/user/forgot_password/reset_password/reset_password_use_case");
var meus_pets_component_1 = require("./presentation/pages/meus-pets/meus-pets.component");
var passeios_component_1 = require("./presentation/pages/passeios/passeios.component");
var animations_1 = require("@angular/platform-browser/animations");
var dialog_1 = require("primeng/dialog");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterUserComponent,
                cadastro_anfitriao_component_1.CadastroAnfitriaoComponent,
                cadastro_pet_component_1.CadastroPetComponent,
                home_component_1.HomeComponent,
                home_usuario_component_1.HomeUsuarioComponent,
                home_anfitriao_component_1.HomeAnfitriaoComponent,
                request_forgot_password_component_1.RequestForgotPasswordComponent,
                reset_password_component_1.ResetPasswordComponent,
                passeios_component_1.PasseiosComponent,
                meus_pets_component_1.MeusPetsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                angular_fontawesome_1.FontAwesomeModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule,
                confirmdialog_1.ConfirmDialogModule,
                dialog_1.DialogModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: error_interceptor_1.HttpErrorInterceptor,
                    multi: true
                },
                cadastro_pet_service_1.CadastroPetService,
                register_user_use_case_1.RegisterUserUseCase,
                login_use_case_1.LoginUseCase,
                request_forgot_pasword_use_case_1.RequestForgotPasswordUseCase,
                reset_password_use_case_1.ResetPasswordUseCase,
                api_1.ConfirmationService,
                { provide: user_repository_1.UserRepositoryToken, useClass: user_repository_2.RemoteUserRepository },
                { provide: storage_1.StorageToken, useClass: native_storage_provider_1.NativeStorageProvider },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
