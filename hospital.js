import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";
import Cita from ".//cita.js";

export default class Hospital {
  /**
   *
   * @param {Nombre} nombre | Nombre del Hospital
   * @param {string} direccion | Dirección del Hospital
   * @param {Doctor} doctores | Clase Doctor
   * @param {Cita} citas | clase Cita
   */

  constructor({ nombre, direccion }) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._doctores = new Array();
    this._citas = new Array();
  }

  registrarDoctor(doctor) {
    this._doctores.push(doctor);
  }

  listarDoctores() {
    this._doctores.forEach((doctor, i) => {
      console.log(`${i} ${doctor.getPerfil()}`);
    });
  }

  registrarCita(cita) {
    this._citas.push(cita);
  }

  listarCitas() {
    this._citas.forEach((cita, i) => {
      console.log(`${i} ${cita.getPerfil()}`);
    });
  }
}
