import { useState, useEffect } from "react";
import '../css/formulario.css';


const Formulario = ({ modalVisible, setmodalVisible, pacientes, setPacientes}) => {
    const [paciente, setPaciente] = useState(''); //Aqui se declaran los estados
    const [nombrePropietario, setNombrePropietario] = useState(''); 
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    /*
    Create 5 new states
    - nombrePropietario
    - email
    - telefono
    - fechaAlta
    - sintomas (descripción del problema)
    Create 5 new inputs with state
    -text
    -tel
    -email
    -date
    Inputs
    -input
    -textarea (contenido con mucho texto)
    */
    
    const handleCita = (e) => {
        e.preventDefault();
        console.log('Enviando');

        if([paciente.trim(), nombrePropietario.trim(), email.trim(), telefono.trim(), fechaAlta.trim(), sintomas.trim()].includes('')){
            console.log('Todos los campos son obligatorios');
            window.alert('Error: Todos los campos son obligatorios');
            return;
        }
        console.log('Todos los campos están llenos');
        // Create an object with all values in the form
        const cita = {
            paciente,
            nombrePropietario,
            email,
            telefono,
            fechaAlta,
            sintomas
        };
        console.log(cita);
        nuevoPaciente.id = Date.now();
        console.log(nuevoPaciente);
        //Save all new record in an array called citas
        // state = add my object into the array
        setPacientes([...pacientes, nuevoPaciente]);
        console.log(pacientes);
    }

    return(
        <div className="formulario-contenido">
            <h2 className="formulario-titulo">Nueva 
                <span className="formulario-titulo-bold"> Cita</span>
            </h2>
            <button
                className="formulario-btn-cancelar"
                onClick={() => { setmodalVisible(false) }}
            >
                <span className="formulario-btn-texto-cancelar">Cancelar</span>
            </button>

            <form onSubmit={(e) => handleCita(e)}> {/* // función que se ejecuta cuando se envía el formulario*/}
                <div className="formulario-campo">
                    <label htmlFor="paciente" className="formulario-label">Nombre Paciente</label>
                    <input id="paciente" type="text" className="formulario-input" placeholder="" value={paciente} onChange={(e) => {setPaciente(e.target.value) }}/>
                </div>
                <div className="formulario-campo">
                    <label htmlFor="nombrePropietario" className="formulario-label">Nombre Propietario</label>
                    <input id="nombrePropietario" type="text" className="formulario-input" placeholder="" value={nombrePropietario} onChange={(e) => {setNombrePropietario(e.target.value) }}/>
                </div>
                <div className="formulario-campo">
                    <label htmlFor="email" className="formulario-label">Email</label>
                    <input id="email" type="email" className="formulario-input" placeholder="" value={email} onChange={(e) => {setEmail(e.target.value) }}/>
                </div>
                <div className="formulario-campo">
                    <label htmlFor="telefono" className="formulario-label">Telefono</label>
                    <input id="telefono" type="tel" className="formulario-input" placeholder="" value={telefono} onChange={(e) => {setTelefono(e.target.value) }}/>
                </div>
                <div className="formulario-campo">
                    <label htmlFor="fechaAlta" className="formulario-label">Fecha Alta</label>
                    <input id="fechaAlta" type="date" className="formulario-input" value={fechaAlta} onChange={(e) => {setFechaAlta(e.target.value) }}/>
                </div>
                <div className="formulario-campo">
                    <label htmlFor="sintomas" className="formulario-label">Sintomas</label>
                    <textarea id="sintomas" className="formulario-input" placeholder="" value={sintomas} onChange={(e) => {setSintomas(e.target.value) }} rows={4}/>
                </div>
                <button type="submit" className="formulario-btn-submit">Agregar Cita</button>
            </form>
        </div>

    );
};


export default Formulario
