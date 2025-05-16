import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PersonaForm, { PersonaFormData } from './personaForm';
import { getPersonaById, updatePersona } from '../../api/personasApi';
import { Persona } from '../../model/Persona';
import Swal from 'sweetalert2';

const EditarPersona = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<PersonaFormData | null>(null);

    useEffect(() => {
        if (id) {
            getPersonaById(String(id)).then((data: Persona) => {
                const formattedData: PersonaFormData = {
                    nombre: data.nombre,
                    apellido: data.apellido,
                    dni: data.dni,
                    fechaNacimiento: new Date(data.fechaNacimiento).toISOString().split('T')[0],
                    genero: data.genero,
                    donante: data.donante
                };
                setInitialData(formattedData);
            });
        }
    }, [id]);

    const handleUpdate = async (data: PersonaFormData) => {
        if (id) {
            const personaToUpdate = {
                ...data,
                fechaNacimiento: new Date(data.fechaNacimiento)
            };

            await updatePersona(String(id), personaToUpdate);

            await Swal.fire({
                title: 'Persona editada',
                text: 'La persona fue editada exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6'
            });

            navigate('/personas');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Editar Persona</h1>
            {initialData ? (
                <PersonaForm initialData={initialData} onSubmit={handleUpdate} buttonLabel="Guardar Cambios" />
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default EditarPersona;
