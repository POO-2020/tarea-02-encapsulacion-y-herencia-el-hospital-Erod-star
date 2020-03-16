import Fecha from "./fecha.js";
import Nombre from "./nombre.js";

export default class Paciente {
  /**
   *
   * @param {Nombre} nombre | Nombre del paciente
   * @param {Fecha} fechaNacimiento | Fecha en la que nació el paciente
   * @param {number} telefono | Número de teléfono del paciente
   */

  constructor({ nombre, fechaNacimiento, telefono }) {
    this._nombre = nombre;
    this._fechaNacimiento = fechaNacimiento;
    this._telefono = telefono;
  }

  getNombre() {
    return this._nombre;
  }

  getPerfil() {
    return `${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFecha()}, ${
      this._telefono
      }`;
  }
}
