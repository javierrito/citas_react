import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente,eliminarPacientes})=>{

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-auto">
            <h2 className="font-black text-3xl text-center">{pacientes.length !==0?'Listado pacientes':'No hay pacientes'}</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
            </p>
            {
                pacientes.map(paciente=>    <Paciente paciente={paciente} setPaciente={setPaciente} eliminarPacientes={eliminarPacientes} key={paciente.id}/>)
            }
        </div>
    )
}

export default ListadoPacientes