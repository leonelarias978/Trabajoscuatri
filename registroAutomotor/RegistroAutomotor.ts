import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";

export class RegistroAutomotor {
  private vehiculos: (Auto | Moto | Camion)[] = [];

  public agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
    this.vehiculos.push(vehiculo);
  }

  public modificarVehiculo(
    index: number,
    vehiculoModificado: Auto | Moto | Camion
  ): void {
    if (this.vehiculos[index]) {
      this.vehiculos[index] = vehiculoModificado;
    }
  }

  public darDeBajaVehiculo(index: number): void {
    if (this.vehiculos[index]) {
      this.vehiculos.splice(index, 1);
    }
  }

  public getVehiculos(): string {
    return this.vehiculos.map((vehiculo) => vehiculo.toString()).join("\n");
  }
}
