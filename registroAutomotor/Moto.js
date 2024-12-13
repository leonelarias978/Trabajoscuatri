"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, año) {
        this.vehiculo = new Vehiculo_1.Vehiculo(marca, modelo, año);
    }
    Moto.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Moto.prototype.setVehiculo = function (vehiculo) {
        this.vehiculo = vehiculo;
    };
    Moto.prototype.toString = function () {
        return "Moto: ".concat(this.vehiculo.toString());
    };
    return Moto;
}());
exports.Moto = Moto;
