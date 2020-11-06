"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var usuario_model_1 = require("../../models/usuario.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.usuario = new usuario_model_1.UsuarioModel();
        this.recordarme = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('email')) {
            this.usuario.email = localStorage.getItem('email');
            this.recordarme = true;
        }
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        if (form.invalid) {
            return;
        }
        sweetalert2_1["default"].fire({
            allowOutsideClick: false,
            icon: 'info',
            text: 'Espere por favor...'
        });
        sweetalert2_1["default"].showLoading();
        this.auth.login(this.usuario)
            .subscribe(function (resp) {
            console.log(resp);
            sweetalert2_1["default"].close();
            if (_this.recordarme) {
                localStorage.setItem('email', _this.usuario.email);
            }
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err.error.error.message);
            sweetalert2_1["default"].fire({
                icon: 'error',
                title: 'Error al autenticar',
                text: err.error.error.message
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
