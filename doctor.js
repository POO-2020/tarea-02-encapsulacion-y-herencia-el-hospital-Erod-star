import Nombre from "./nombre.js";

export default class Doctor {
  /**
   *
   * @param {Nombre} doctor
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */

  constructor({ doctor, especialidad, telefono, cedula }) {
    this._doctor = doctor;
    this._especialidad = especialidad;
    this._telefono = telefono;
    this._cedula = cedula;
  }

  esIgualA(doctor) {
    if (doctor.getCedula() === this._cedula) {
      return true;
    }
    return false;
  }

  getDoctor() {
    return this._doctor;
  }

  getCedula() {
    return this._cedula;
  }

  getPerfil() {
    return `${this._cedula}, ${
      this._especialidad
      }, ${this._doctor.getNombreCompleto()}, ${this._telefono}`;
  }
}
