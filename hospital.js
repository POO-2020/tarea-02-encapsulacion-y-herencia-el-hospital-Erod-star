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

  // ----- M É T O D O S   D O C T O R E S -----

  registrarDoctor(doctor) {
    if (this.buscarDoctor(doctor) === undefined) {
      this._doctores.push(doctor);
      return true;
    }
    return false;
  }

  buscarDoctor(doctor) {
    let resultado = undefined;

    this._doctores.forEach(d => {
      if (d.esIgualA(doctor)) {
        resultado = d;
      }
    });

    return resultado;
  }

  buscarIndiceDoctor(doctor) {
    let indice = -1;

    this._doctores.forEach((d, i) => {
      if (d.esIgualA(doctor)) {
        indice = i;
      }
    });

    return indice;
  }

  eliminarDoctor(doctor) {
    let indice = this.buscarIndiceDoctor(doctor);

    if (indice < 0) {
      return false;
    }

    this._doctores.splice(indice, 1);
    return true;
  }

  actualizarDoctor(doctor, nuevoDoctor) {
    let indice = this.buscarIndiceDoctor(doctor);

    if (indice < 0) {
      return false;
    }

    this._doctores.splice(indice, 1, nuevoDoctor);
    return true;
  }

  listarDoctores() {
    this._doctores.forEach((doctor, i) => {
      console.log(`${i} ${doctor.getPerfil()}`);
    });
  }


  // ----- M É T O D O S   C I T A S -----

  registrarCita(cita) {
    if (this.buscarCita(cita) === undefined) {
      this._citas.push(cita);
      return true;
    }
    return false;
  }

  buscarCita(cita) {
    let resultado = undefined;

    this._citas.forEach(c => {
      if (c.esIgualA(cita)) {
        resultado = c;
      }
    });

    return resultado;
  }

  buscarIndiceCita(cita) {
    let resultado = this._citas.find(c => c.esIgualA(cita));

    return resultado;
  }

  eliminarCita(cita) {
    let indice = this.buscarIndiceCita(cita);

    if (indice < 0) {
      return false;
    }

    this._citas.splice(indice, 1);
    return true;
  }

  actualizarCita(cita, nuevaCita) {
    let indice = this.buscarIndiceCita(cita);

    if (indice < 0) {
      return false;
    }

    this._citas.splice(indice, 1, nuevaCita);
    return true;
  }

  listarCitas() {
    this._citas.forEach((cita, i) => {
      console.log(`${i} ${cita.getPerfil()}`);
    });
  }
}
