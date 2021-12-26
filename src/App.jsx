import {useState,useEffect} from 'react'

import Header from "./components/Header"
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
function App() {
  
  const [pacientes,setPacientes] = useState([])
  const [paciente, setPaciente] =  useState({})

  useEffect(()=>{
    const localST = ()=>{
      const dataLS = JSON.parse(localStorage.getItem('pacientes') )?? []
      setPacientes(dataLS)
    }
    localST()
  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))

  },[pacientes])


  const eliminarPacientes = (id)=>{
    const nuevosPacientes = pacientes.filter(elem => elem.id !== id)
    setPacientes(nuevosPacientes)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
           pacientes={pacientes}
           setPaciente={setPaciente}
           eliminarPacientes ={eliminarPacientes}
        />
      </div>

    </div>
  )
}

export default App
