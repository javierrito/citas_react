import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'
const Formulario = ({setPacientes,pacientes, paciente,setPaciente})=>{

    const [nombre , setNombre] = useState('')  
    const [propietario , setPropietario] = useState('')  
    const [email , setEmail] = useState('')  
    const [fecha , setFecha] = useState('')  
    const [sintomas, setSintomas] = useState('')

    const[validacionForm, setValidacionForm] = useState(false)

    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            console.log('Hay elementos')
            setNombre(paciente.nombre)
            setEmail(paciente.email)
            setPropietario(paciente.propietario)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    },[paciente])

    const date = Date.now().toString(36)
    const numero =Math.random().toString(36).slice(2)
    const id = date + numero

    const handlerSubmit = (e) =>{
        e.preventDefault();
       
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setValidacionForm(true)
            return
        }
        setValidacionForm(false)
        const pacienteForm={
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }
        

        if(paciente.id){
            pacienteForm.id = paciente.id 
            const pacientesActualizados = pacientes.map(pacienteState=>
                pacienteState.id === paciente.id ? pacienteForm  : pacienteState)
                setPacientes(pacientesActualizados)
                setPaciente({})
        }else{
            pacienteForm.id = id 
            setPacientes([...pacientes,pacienteForm])
        }

       
        formClean()
        
    }

    const formClean = ()=>{
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={handlerSubmit}>
               {validacionForm ? <Mensaje mensaje={'Complete todos los campos'}/>:''}
                <div className="mb-5">
                    <label className="block text-gray-700 font-bold" htmlFor="mascota">Nombre Mascota {nombre}</label>
                    <input id="mascota" type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400
                    rounded-md" 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-bold" htmlFor="propietario">Nombre Propietario</label>
                    <input id="propietario" type="text"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400
                    rounded-md"
                    value={propietario}
                    onChange={e=> setPropietario(e.target.value) } />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-bold" htmlFor="email">Email</label>
                    <input id="email" type="text"
                    placeholder="Email"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400
                    rounded-md"
                    value={email}
                    onChange={e=> setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-bold" htmlFor="fecha">Fecha de alta</label>
                    <input id="fecha" type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400
                    rounded-md" 
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-bold" htmlFor="sintomas">Sintomas</label>
                   <textarea id ="sintomas"  className="border-2 w-full p-2 mt-2 placeholder-gray-400
                    rounded-md"  placeholder="Describe los sintomas"
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}/>
                </div>
                <input type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                value={paciente.id ? 'Editar paciente':'Agregar paciente' } />
            </form>
        </div>
  
    )
}

export default Formulario

