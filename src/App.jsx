import { useState } from 'react'
import Formulario from "./components/Formulario"
import './css/main.css'

function App() {
  const [initialState, setState] = useState("Hola Mundo");
  // modalVisible - false al dar click osea true
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <main className="container">
        <h1>Administrador de Citas <span className='titulo-bold'>Vaterinario</span></h1>
        <button className='btn-nueva-cita' onClick={() => setModalVisible(true)}>
          <span className='btn-text-nueva-cita'>Nueva Cita</span>
        </button>
        {modalVisible && (
          <div className='modal-overlay' role='dialog' aria-modal='true'>
            <div className='modal-content'>
              <Formulario />
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
