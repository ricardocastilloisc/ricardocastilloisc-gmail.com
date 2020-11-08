"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var input_1 = require("@angular/material/input");
var registro_component_1 = require("./pages/registro/registro.component");
var home_component_1 = require("./pages/home/home.component");
var login_component_1 = require("./pages/login/login.component");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material.module");
var mapa_component_1 = require("./components/mapa/mapa.component");
var core_2 = require("@agm/core");
var agm_direction_1 = require("agm-direction");
var altamarcador_component_1 = require("./dialog/altamarcador/altamarcador.component");
var dialog_1 = require("@angular/material/dialog");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            entryComponents: [
                altamarcador_component_1.AltamarcadorComponent
            ],
            declarations: [
                app_component_1.AppComponent,
                registro_component_1.RegistroComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                mapa_component_1.MapaComponent,
                altamarcador_component_1.AltamarcadorComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                agm_direction_1.AgmDirectionModule,
                input_1.MatInputModule,
                dialog_1.MatDialogModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyBOnoATvpf2EA_RiJgiV2VeTZ4YOgRNLz8'
                }),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//apikey
//AIzaSyBOnoATvpf2EA_RiJgiV2VeTZ4YOgRNLz8
