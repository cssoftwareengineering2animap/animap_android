"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PasseiosComponent = void 0;
var core_1 = require("@angular/core");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var PasseiosComponent = /** @class */ (function () {
    function PasseiosComponent(confirmationService) {
        this.confirmationService = confirmationService;
        this.faBars = free_solid_svg_icons_1.faBars;
        this.faBan = free_solid_svg_icons_1.faBan;
        this.faComment = free_solid_svg_icons_1.faComment;
        this.dropdownToggle = false;
        this.display = false;
    }
    PasseiosComponent.prototype.toggle = function () {
        this.dropdownToggle = !this.dropdownToggle;
    };
    PasseiosComponent.prototype.showDialog = function () {
        this.display = true;
    };
    PasseiosComponent.prototype.confirm = function (nomeAnfitriao) {
        this.confirmationService.confirm({
            message: "Tem certeza que deseja bloquear " + nomeAnfitriao + "?",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            accept: function () {
                //Actual logic to perform a confirmation
            }
        });
    };
    PasseiosComponent.prototype.ngOnInit = function () { };
    PasseiosComponent.prototype.getHora = function (data) {
        var indice = data.indexOf(':');
        var hora = data.slice(indice - 2, indice);
        var minutos = data.slice(indice + 1, indice + 3);
        return hora + ":" + minutos;
    };
    PasseiosComponent.prototype.getData = function (data) {
        return "" + data.slice(0, 9);
    };
    PasseiosComponent = __decorate([
        core_1.Component({
            selector: "app-passeios",
            templateUrl: "./passeios.component.html",
            styleUrls: ["./passeios.component.scss"]
        })
    ], PasseiosComponent);
    return PasseiosComponent;
}());
exports.PasseiosComponent = PasseiosComponent;
