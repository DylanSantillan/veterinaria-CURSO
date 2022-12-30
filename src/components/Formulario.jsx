import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
        if( Object.keys(paciente).length > 0  ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    /* generador de id */
    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        /* Validación del Formulario */
        if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
            console.log('Hay Al Menos un campo vacio')

            setError(true)
            setTimeout(() => {
                setError(false) 
            }, 3000);
            return;
        } 
        
        setError(false)


        // Objeto de Paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id) {
            // Editando el Registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})

        } else {
            // Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        // Reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className="form-section">
            <h2 className="form-section__title">Seguimiento Pacientes</h2>

            <h3 className="form-section__sub-title">
                Añade Pacientes y {''}
                <span className="form-section__sub-title--span">Administralos</span>
            </h3>


            <form 
                onSubmit={handleSubmit}
                className="form"
            >
                <div className="dato-conteiner">
                    <label htmlFor="mascota" className="dato-conteiner__label">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="dato-conteiner__input"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />  
                </div>

                <div className="dato-conteiner">
                    <label htmlFor="propietario" className="dato-conteiner__label">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="dato-conteiner__input"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />  
                </div>

                <div className="dato-conteiner">
                    <label htmlFor="email" className="dato-conteiner__label">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto Propietario"
                        className="dato-conteiner__input"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />  
                </div>

                <div className="dato-conteiner">
                    <label htmlFor="alta" className="dato-conteiner__label">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="dato-conteiner__input"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />  
                </div>

                <div className="dato-conteiner">
                    <label htmlFor="sintomas" className="dato-conteiner__label">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        className="dato-conteiner__input"
                        placeholder="Describe los Síntomas"
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>

                <input
                    type="submit"
                    className='form__button'
                    value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
                />

                {error && <Error /> }
            </form>

        </div>
    )
}

export default Formulario