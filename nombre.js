export default class Nombre {
  /**
   *
   * @param {string} nombre | Nombre del paciente
   * @param {string} apellidoPaterno | Apellido paterno del paciente
   * @param {string} apellidoMaterno | Apellido materno del paciente
   */

  constructor(nombre, apellidoPaterno, apellidoMaterno) {
    this._nombre = nombre;
    this._apellidoPaterno = apellidoPaterno;
    this._apellidoMaterno = apellidoMaterno;
  }

  getApellidoPaterno() {
    return this._apellidoPaterno;
  }

  getNombreCompleto() {
    return `${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`;
  }

  getApellidoNombre() {
    return `${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`;
  }

  getIniciales() {
    return `${this._nombre.charAt(0)}${this._apellidoPaterno.charAt(
      0
    )}${this._apellidoMaterno.charAt(0)}`;
  }
}
