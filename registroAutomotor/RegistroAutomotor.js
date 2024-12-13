"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (index, vehiculoModificado) {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = vehiculoModificado;
        }
    };
    RegistroAutomotor.prototype.darDeBajaVehiculo = function (index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    };
    RegistroAutomotor.prototype.getVehiculos = function () {
        // return this.vehiculos;
        return this.vehiculos.map(function (vehiculo) { return vehiculo.toString(); }).join("\n");
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
