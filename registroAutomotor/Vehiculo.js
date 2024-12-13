"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Vehiculo.prototype.toString = function () {
        return "".concat(this.marca, " ").concat(this.modelo, " (").concat(this.anio, ")");
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
