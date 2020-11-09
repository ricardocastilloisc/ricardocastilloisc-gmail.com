"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapaComponent = void 0;
var core_1 = require("@angular/core");
var marcador_class_1 = require("../../classes/marcador.class");
var altamarcador_component_1 = require("../../dialog/altamarcador/altamarcador.component");
var MapaComponent = /** @class */ (function () {
    function MapaComponent(dialog, snackBar, servicio) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.servicio = servicio;
        this.marcadores = [];
        this.lineas = [];
        this.lat = 20.4179075;
        this.lng = -87.9156008;
    }
    MapaComponent.prototype.ngOnInit = function () {
        this.CargarMarcadores();
    };
    MapaComponent.prototype.CargarMarcadores = function () {
        var _this = this;
        var nuevoMarcador = new marcador_class_1.Marcador(20.4179075, -87.9156008, 'Quintana Roo', 'Quintana Roo');
        this.marcadores.push(nuevoMarcador);
        this.servicio.getUbicaciones().subscribe(function (res) {
            var arreglo = res.recordset;
            for (var i = 0; i < arreglo.length; i++) {
                var nuevoMarcadorRespo = new marcador_class_1.Marcador(Number(arreglo[i].a.trim()), Number(arreglo[i].b.trim()), arreglo[i].id.trim(), arreglo[i].c.trim());
                _this.marcadores.push(nuevoMarcadorRespo);
            }
            if (_this.marcadores.length % 2 == 0) {
                //return "par";
                for (var x = 0; x < arreglo.length; x = x + 2) {
                    _this.lineas.push({
                        latA: _this.marcadores[x].lat,
                        lngA: _this.marcadores[x].lng,
                        latB: _this.marcadores[x + 1].lat,
                        lngB: _this.marcadores[x + 1].lng
                    });
                }
            }
            else {
                for (var x = 0; x < arreglo.length - 1; x = x + 2) {
                    _this.lineas.push({
                        latA: _this.marcadores[x].lat,
                        lngA: _this.marcadores[x].lng,
                        latB: _this.marcadores[x + 1].lat,
                        lngB: _this.marcadores[x + 1].lng
                    });
                }
            }
            console.log(_this.lineas);
        });
    };
    /*
      agregarMarcador( evento ) {
    
        const coords: { lat: number, lng: number } = evento.coords;
    
        const nuevoMarcador = new Marcador( coords.lat, coords.lng );
    
        this.marcadores.push( nuevoMarcador );
    
        this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
    
      }
    */
    MapaComponent.prototype.dialogoAlta = function () {
        var _this = this;
        var dialogRef = this.dialog.open(altamarcador_component_1.AltamarcadorComponent, {
            width: '800px',
            height: '100%',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                var body = {
                    id: res.nombrelugar,
                    aa: res.latitud,
                    bb: res.longitud
                };
                _this.servicio.postUbicaciones(body).subscribe(function (res) {
                    _this.CargarMarcadores();
                    _this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
                });
            }
        });
    };
    MapaComponent = __decorate([
        core_1.Component({
            selector: 'app-mapa',
            templateUrl: './mapa.component.html',
            styleUrls: ['./mapa.component.css']
        })
    ], MapaComponent);
    return MapaComponent;
}());
exports.MapaComponent = MapaComponent;
