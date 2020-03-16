import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Nombre from "./nombre.js";

export default class PacienteAsegurado extends Paciente {
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} fechaFinVigencia 
     * @param {string} compañia 
     */
    constructor({ numeroPoliza, fechaFinVigencia, compañia, nombre, fechaNacimiento, telefono }) {
        super({ nombre, fechaNacimiento, telefono });
        this._numeroPoliza = numeroPoliza;
        this._fechaFinVigencia = fechaFinVigencia;
        this._compañia = compañia;
    }

    getPerfil() {
        return `        ${this._nombre.getNombreCompleto()},
        ${this._fechaNacimiento.getFecha()},
        ${this._telefono},
        ${this._numeroPoliza},
        ${this._fechaFinVigencia.getFecha()},
        ${this._compañia}`
    }
}