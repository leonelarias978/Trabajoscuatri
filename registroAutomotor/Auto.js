"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Vehiculo_1 = require("./Vehiculo");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año) {
        this.vehiculo = new Vehiculo_1.Vehiculo(marca, modelo, año);
    }
    Auto.prototype.getVehiculo = function () {
        return this.vehiculo;
    };
    Auto.prototype.setVehiculo = function (vehiculo) {
        this.vehiculo = vehiculo;
    };
    Auto.prototype.toString = function () {
        return "Auto: ".concat(this.vehiculo.toString());
    };
    return Auto;
}());
exports.Auto = Auto;
