"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var AuthService = /** @class */ (function () {
    //crear session
    //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    //iniciar sesion
    //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    function AuthService(http) {
        this.http = http;
        this.url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
        this.apikey = 'AIzaSyCcfUJDaTKunHiKCbUYMaMquRK3zx4PkOA';
    }
    AuthService.prototype.logout = function () { };
    AuthService.prototype.login = function (usuario) { };
    AuthService.prototype.nuevoUsuario = function (usuario) {
        var authData = __assign(__assign({}, usuario), { returnSecureToken: true });
        return this.http.post(this.url + "signUp?key=" + this.apikey, authData);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
