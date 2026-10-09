import '../css/Paciente.css'

const Paciente = ({setModalVisible, pacientes, paciente}) => {

    //Parametros son etiquetas que esperan recibir el valor del estado de un componente padre y hacen algo con ellos
    // El parametro de setModalVisible es la funcion que cambia el valor del estado
    // El parametro de pacientes es el array que guarda todos los nuevos registros

    const handleEditar = () => {
        // Abrir el modal cuando se de clic
        setModalVisible(true);
        // En console.log mostrar el array de pacientes
        console.log(pacientes);
    }
    return(
        <article className="paciente-card">
            <p className="paciente-label">Paciente: <span className="paciente-nombre">{paciente.paciente}</span></p>
            <p className="paciente-label">Fecha Alta: <span className="paciente-fecha">{paciente.fechaAlta}</span></p>

            <div className="paciente-contenedor-botones">
                <button className="paciente-btn paciente-btn-editar" onClick = {() => handleEditar()}>Editar</button>
                <button className="paciente-btn paciente-btn-eliminar">Eliminar</button>
            </div>
            
            {/* <p className="paciente-label">Propietario: <span className="paciente-propietario">{paciente.propietario}</span></p>
            <p className="paciente-label">Email: <span className="paciente-email">{paciente.email}</span></p>
            <p className="paciente-label">Telefono: <span className="paciente-telefono">{paciente.telefono}</span></p>
            <p className="paciente-label">Sintomas: <span className="paciente-sintomas">{paciente.sintomas}</span></p> */}
        </article>
    );
};

export default Paciente;