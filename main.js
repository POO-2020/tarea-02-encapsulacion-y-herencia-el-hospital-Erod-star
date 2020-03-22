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

        this._pacAs1 = new PacienteAsegurado(datosPacienteAs);

        let datosPaciente1 = {
            nombre: new Nombre('Jennifer', 'Cardenas', 'Govea'),
            fechaNacimiento: new Fecha(22, 1, 1995),
            telefono: 3121135555,
        }

        let datosPaciente2 = {
            nombre: new Nombre('Jonathan', 'Elsal', 'Vadormio'),
            fechaNacimiento: new Fecha(22, 1, 1995),
            telefono: 3121135555,
        }

        this._pac1 = new Paciente(datosPaciente1);
        this._pac2 = new Paciente(datosPaciente2);

        let datosDoctor1 = {
            doctor: new Nombre('Luis', 'Comunica', 'Chuls'),
            especialidad: 'Cirujano',
            telefono: 3121117788,
            cedula: 1314
        }

        let datosDoctor2 = {
            doctor: new Nombre('Deb', 'Ryan', 'Show'),
            especialidad: 'Pediatra',
            telefono: 3121117788,
            cedula: 131456
        }

        let datosDoctor3 = {
            doctor: new Nombre('Silee', 'Estopro', 'Fetengodiez'),
            especialidad: 'Dermatologo',
            telefono: 3121141155,
            cedula: 1314
        }

        this._doctor1 = new Doctor(datosDoctor1);
        this._doctor2 = new Doctor(datosDoctor2);
        this._doctor3 = new Doctor(datosDoctor3);

        let datosCita1 = {
            fecha: new Fecha(22, 5, 2020),
            hora: new Tiempo(4, 25, 'PM'),
            doctor: new Doctor(datosDoctor1),
            paciente: new Paciente(datosPaciente1)
        }

        let datosCita2 = {
            fecha: new Fecha(15, 1, 2020),
            hora: new Tiempo(6, 10, 'PM'),
            doctor: new Doctor(datosDoctor2),
            paciente: new Paciente(datosPaciente2)
        }

        let datosCita3 = {
            fecha: new Fecha(22, 5, 2020),
            hora: new Tiempo(4, 25, 'PM'),
            doctor: new Doctor(datosDoctor1),
            paciente: new Paciente(datosPaciente2)
        }

        this._cita1 = new Cita(datosCita1);
        this._cita2 = new Cita(datosCita2);
        this._cita3 = new Cita(datosCita3);

        let datosHospital = {
            nombre: 'XXX',
            direccion: 'Paseo de la pisteción'
        }

        this._hospital = new Hospital(datosHospital);

    }

    testPacienteAsegurado() {
        console.log(this._pacAs1.getPerfil());
    }

    testPaciente() {
        console.log(this._pac1.getPerfil());
    }

    testDoctor() {
        console.log(this._doctor1.getPerfil());
    }

    testCita() {
        console.log(this._cita1.getPerfil());
    }

    testHospital() {
        let h = this._hospital;

        // ----- T E S T I N G   D O C T O R E S -----
        console.log(" ----------- Testeo de doctores ----------- ");

        console.log(h.registrarDoctor(this._doctor1));
        console.log(h.registrarDoctor(this._doctor2));
        console.log(h.registrarDoctor(this._doctor3));

        console.log(h.listarDoctores());

        console.log(h.buscarDoctor(this._doctor1));
        console.log(h.buscarDoctor(this._doctor2));
        console.log(h.buscarDoctor(this._doctor3));

        console.log(h.buscarIndiceDoctor(this._doctor1));
        console.log(h.buscarIndiceDoctor(this._doctor2));
        console.log(h.buscarIndiceDoctor(this._doctor3));

        console.log(h.eliminarDoctor(this._doctor2));

        console.log(h.listarDoctores());

        console.log(h.actualizarDoctor(this._doctor1, this._doctor3));

        console.log(h.listarDoctores());

        // ----- T E S T I N G   C I T A S -----
        console.log(" ----------- Testeo de citas ----------- ");

        console.log(h.registrarCita(this._cita1));
        console.log(h.registrarCita(this._cita2));
        console.log(h.registrarCita(this._cita3));

        console.log(h.listarCitas());

        console.log(h.buscarCita(this._cita1));
        console.log(h.buscarCita(this._cita2));
        console.log(h.buscarCita(this._cita3));

        console.log(h.eliminarCita(this._cita2));

        console.log(h.listarCitas());

        console.log(h.actualizarCita(this._cita1, this._cita3));

        console.log(h.listarCitas());


    }
}

let app = new Main();
/* app.testPacienteAsegurado();
app.testPaciente();
app.testDoctor();
app.testCita();*/
app.testHospital();
