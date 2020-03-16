import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";

export default class Cita {
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */

  constructor({ fecha, hora, doctor, paciente }) {
    this._fecha = fecha;
    this._hora = hora;
    this._doctor = doctor;
    this._paciente = paciente;
  }

  getPerfil() {
    return `${this._fecha.getFecha()}, ${this._hora.getFormato24()}, ${"Dr. " +
      this._doctor.getDoctor().getApellidoPaterno()}, ${this._paciente.getNombre().getNombreCompleto()}`;
  }
}
