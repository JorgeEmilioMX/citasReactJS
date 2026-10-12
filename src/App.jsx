import { useState } from 'react'
import Formulario from "./components/Formulario.jsx"
import './css/main.css'
import Paciente from './components/Paciente.jsx'

function App() {
  // modalVisible - false al dar click osea true, 
  const [modalVisible, setModalVisible] = useState(false); 
  // modalVisible variable que guarda el valor del estado y setModalVisible es la funcion que cambia el valor del estado

  const [pacientes, setPacientes] = useState([]); //Array to save all the new records
  
  const eliminarPaciente = (id) => {
    const confirmar = window.confirm("¿Deseas eliminar el paciente? Una vez eliminado no se podra recuperar");

    console.log(confirmar);

    if (confirmar) {
      const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id);
      setPacientes(pacienteActualizado);
    }
  };

  //Para pasar estados de un componente padre a un componente hijo se hace a travez de props
  return (
    <>
      <main className="container">
        <h1>Administrador de Citas <span className='titulo-bold'>Veterinario</span></h1>
        <button className='btn-nueva-cita' onClick={() => setModalVisible(true)}>
          <span className='btn-text-nueva-cita'>Nueva Cita</span>
        </button>

        {pacientes.map((paciente) => {
          return(
            <Paciente 
              setModalVisible={setModalVisible} 
              pacientes={pacientes} 
              paciente={paciente} 
              key={paciente.id}
              eliminarPaciente={eliminarPaciente}
            />
          )
        })}

        {modalVisible && (
          <div className='modal-overlay' role='dialog' aria-modal='true'>
            <div className='modal-content'>
              <Formulario
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                pacientes={pacientes}
                setPacientes={setPacientes}
              />
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
