"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var meus_pets_component_1 = require("./presentation/pages/meus-pets/meus-pets.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./presentation/pages/home/home.component");
var cadastro_anfitriao_component_1 = require("./presentation/pages/cadastro-anfitriao/cadastro-anfitriao.component");
var login_component_1 = require("./presentation/pages/user/login/login.component");
var cadastro_pet_component_1 = require("./presentation/pages/cadastro-pet/cadastro-pet.component");
var register_component_1 = require("./presentation/pages/user/register/register.component");
var request_forgot_password_component_1 = require("./presentation/pages/user/forgot-password/request-forgot-password/request-forgot-password.component");
var reset_password_component_1 = require("./presentation/pages/user/forgot-password/reset-password/reset-password.component");
var passeios_component_1 = require("./presentation/pages/passeios/passeios.component");
var routes = [
    {
        path: "request-forgot-password",
        component: request_forgot_password_component_1.RequestForgotPasswordComponent
    },
    {
        path: "reset-password",
        component: reset_password_component_1.ResetPasswordComponent
    },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "cadastro", component: register_component_1.RegisterUserComponent },
    { path: "cadastro-anfitriao", component: cadastro_anfitriao_component_1.CadastroAnfitriaoComponent },
    { path: "cadastro-pet", component: cadastro_pet_component_1.CadastroPetComponent },
    { path: "home", component: home_component_1.HomeComponent },
    { path: "pets", component: meus_pets_component_1.MeusPetsComponent },
    { path: "passeios", component: passeios_component_1.PasseiosComponent },
    { path: "**", redirectTo: "/login" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
