const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente
  
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');
  
        if(respuesta) {
            eliminarPaciente(id)
        }
    }
  
    return (
        <div className="paciente-conteiner">
            <p className="paciente-conteiner__dato">Nombre: {''}
                <span className="paciente-conteiner__dato--span">{nombre}</span>
            </p>
  
            <p className="paciente-conteiner__dato">Propietario: {''}
                <span className="paciente-conteiner__dato--span">{propietario}</span>
            </p>
  
            <p className="paciente-conteiner__dato">Email: {''}
                <span className="paciente-conteiner__dato--span">{email}</span>
            </p>
  
            <p className="paciente-conteiner__dato">Fecha Alta: {''}
                <span className="paciente-conteiner__dato--span">{fecha}</span>
            </p>
  
            <p className="paciente-conteiner__dato">Síntomas: {''}
                <span className="paciente-conteiner__dato--span">{sintomas}</span>
            </p>
  
            <div className="btn-paciente">
                <button 
                    type="button"
                    className="btn-paciente__editar"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
  
                <button 
                    type="button"
                    className="btn-paciente__eliminar"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
  }
  
  export default Paciente