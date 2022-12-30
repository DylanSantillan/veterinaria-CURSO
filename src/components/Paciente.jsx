const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, fecha, sintomas, id } = paciente
  
    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente?');
  
        if(respuesta) {
            eliminarPaciente(id)
        }
    }
  
    return (
        <div className="conteiner-paciente">
            <p className="conteiner-paciente__dato">Nombre: {''}
                <span className="conteiner-paciente__dato--span">{nombre}</span>
            </p>
  
            <p className="conteiner-paciente__dato">Propietario: {''}
                <span className="conteiner-paciente__dato--span">{propietario}</span>
            </p>
  
            <p className="conteiner-paciente__dato">Email: {''}
                <span className="conteiner-paciente__dato--span">{email}</span>
            </p>
  
            <p className="conteiner-paciente__dato">Fecha Alta: {''}
                <span className="conteiner-paciente__dato--span">{fecha}</span>
            </p>
  
            <p className="conteiner-paciente__dato">Síntomas: {''}
                <span className="conteiner-paciente__dato--span">{sintomas}</span>
            </p>
  
            <div className="conteiner-buttons">
                <button 
                    type="button"
                    className="conteiner-buttons__editar"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>
  
                <button 
                    type="button"
                    className="conteiner-buttons__eliminar"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
  }
  
  export default Paciente