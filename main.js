import Paciente from "./paciente.js";
import PacienteAsegurado from "./paciente_asegurado.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Doctor from "./doctor.js";
import Tiempo from "./tiempo.js";
import Cita from "./cita.js";
import Hospital from "./hospital.js";


export default class Main {
    constructor() {

        let datosPacienteAs = {
            nombre: new Nombre('Jennifer', 'Cardenas', 'Govea'),
            fechaNacimiento: new Fecha(22, 1, 1995),
            telefono: 3121135555,
            numeroPoliza: 15473,
            fechaFinVigencia: new Fecha(15, 10, 2010),
            compañia: 'Rico-Suave'
        }

        this.pacAs1 = new PacienteAsegurado(datosPacienteAs);

        let datosPaciente = {
            nombre: new Nombre('Jennifer', 'Cardenas', 'Govea'),
            fechaNacimiento: new Fecha(22, 1, 1995),
            telefono: 3121135555,
        }

        this.pac1 = new Paciente(datosPaciente);

        let datosDoctor = {
            doctor: new Nombre('Luis', 'Comunica', 'Chuls'),
            especialidad: 'Cirujano',
            telefono: 3121117788,
            cedula: 1314
        }

        this.queHayDeNuevoDoc = new Doctor(datosDoctor);

        let datosCita = {
            fecha: new Fecha(22, 5, 2020),
            hora: new Tiempo(5, 23, 'AM'),
            doctor: new Doctor(datosDoctor),
            paciente: new Paciente(datosPaciente)
        }

        this.cita1 = new Cita(datosCita);

        let datosHospital = {
            nombre: 'XXX',
            direccion: 'Paseo de la pisteción'
        }

        this.hospital = new Hospital(datosHospital);

    }

    testPacienteAsegurado() {
        console.log(this.pacAs1.getPerfil())
    }

    testPaciente() {
        console.log(this.pac1.getPerfil())
    }

    testDoctor() {
        console.log(this.queHayDeNuevoDoc.getPerfil())
    }

    testCita() {
        console.log(this.cita1.getPerfil())
    }
}

let app = new Main();
app.testPacienteAsegurado();
app.testPaciente();
app.testDoctor();
app.testCita();
