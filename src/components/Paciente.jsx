
const Paciente = ({paciente}) => {
    return(
        <article className="paciente-card">
            <p className="paciente-label">Nombre: <span className="paciente-nombre">{paciente.nombre}</span></p>
            <p className="paciente-label">Fecha Alta: <span className="paciente-fecha">{paciente.fechaAlta}</span></p>

            <div className="paciente-contenedor-botones">
                <button className="paciente-btn paciente-btn-editar">Editar</button>
                <button className="paciente-btn paciente-btn-eliminar">Eliminar</button>
            </div>
            
            <p className="paciente-label">Propietario: <span className="paciente-propietario">{paciente.propietario}</span></p>
            <p className="paciente-label">Email: <span className="paciente-email">{paciente.email}</span></p>
            <p className="paciente-label">Telefono: <span className="paciente-telefono">{paciente.telefono}</span></p>
            <p className="paciente-label">Sintomas: <span className="paciente-sintomas">{paciente.sintomas}</span></p>
        </article>
    );
};

export default Paciente;