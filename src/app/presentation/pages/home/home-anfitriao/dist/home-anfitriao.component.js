"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeAnfitriaoComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var passeio_model_1 = require("./models/passeio.model");
var HomeAnfitriaoComponent = /** @class */ (function () {
    function HomeAnfitriaoComponent() {
        this.faBars = free_solid_svg_icons_1.faBars;
        this.dropdownToggle = false;
        this.passeios = [new passeio_model_1.Passeio(1, 1, 1, 'Thor', '24/10/2020 17:50', 2, 'Pitbull'),
            new passeio_model_1.Passeio(2, 2, 2, 'Pablo', '24/10/2020 13:50', 3, 'Kocker')];
    }
    HomeAnfitriaoComponent.prototype.ngOnInit = function () {
    };
    HomeAnfitriaoComponent.prototype.toggle = function () {
        this.dropdownToggle = !this.dropdownToggle;
    };
    HomeAnfitriaoComponent.prototype.dataToHora = function (data) {
        var indice = data.indexOf(':');
        var hora = data.slice(indice - 2, indice);
        var minutos = data.slice(indice + 1, indice + 3);
        return hora + ":" + minutos;
    };
    HomeAnfitriaoComponent.prototype.getIdade = function (idade) {
        return idade + " " + ((idade == 1) ? 'ano' : 'anos');
    };
    HomeAnfitriaoComponent = __decorate([
        core_1.Component({
            selector: 'app-home-anfitriao',
            templateUrl: './home-anfitriao.component.html',
            styleUrls: ['./home-anfitriao.component.scss']
        })
    ], HomeAnfitriaoComponent);
    return HomeAnfitriaoComponent;
}());
exports.HomeAnfitriaoComponent = HomeAnfitriaoComponent;
