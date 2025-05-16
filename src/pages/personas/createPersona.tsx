import { useNavigate } from 'react-router-dom';
import PersonaForm, { PersonaFormData } from './personaForm';
import { createPersona } from '../../api/personasApi';
import { Persona } from '../../model/Persona';
import Swal from 'sweetalert2';

const CreatePersona = () => {
    const navigate = useNavigate();

    const handleCreate = async (data: PersonaFormData) => {
        const personaToCreate: Omit<Persona, 'id'> = {
            ...data,
            fechaNacimiento: new Date(data.fechaNacimiento),
            autos: []
        };

        await createPersona(personaToCreate);

        await Swal.fire({
            title: 'Persona creada',
            text: 'La persona fue creada exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6'
        });

        navigate('/personas');
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Nueva Persona</h2>
            <PersonaForm onSubmit={handleCreate} buttonLabel="Crear" />
        </div>
    );
};

export default CreatePersona;
