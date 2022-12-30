import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="wrapper">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="wrapper__title">Listado Pacientes</h2>
                    <p className="wrapper__sub-title">
                        Administra tus {''}
                        <span className="wrapper__sub-title--span">Pacientes y Citas</span>
                    </p>

                    { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="wrapper__title">No hay pacientes</h2>
                    <p className="wrapper__sub-title">
                        Comienza agregando pacientes y {''}
                        <span className="wrapper__sub-title--span">aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
