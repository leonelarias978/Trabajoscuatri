"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, año) {
        this.vehiculo = new Vehiculo_1.Vehiculo(marca, modelo, año);
    }
    Camion.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Camion.prototype.setVehiculo = function (vehiculo) {
        this.vehiculo = vehiculo;
    };
    Camion.prototype.toString = function () {
        return "Camion: ".concat(this.vehiculo.toString());
    };
    return Camion;
}());
exports.Camion = Camion;
