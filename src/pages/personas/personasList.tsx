import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Persona } from '../../model/Persona';
import { deletePersona, getAllPersonas } from '../../api/personasApi';
import AddButton from '../../components/personaList/addPersonaButton';
import PersonasTable from '../../components/personaList/personasTable';

const PersonasList = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [personaAEliminar, setPersonaAEliminar] = useState<Persona | null>(null);

    useEffect(() => {
        getAllPersonas().then(setPersonas);
    }, []);

    useEffect(() => {
        if (personaAEliminar) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: `Esta acción eliminará a ${personaAEliminar.nombre} ${personaAEliminar.apellido}.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6'
            }).then(async (resultado) => {
                if (resultado.isConfirmed) {
                    await deletePersona(personaAEliminar.id);
                    setPersonas((prev) => prev.filter((p) => p.id !== personaAEliminar.id));
                    Swal.fire('Eliminado', 'La persona ha sido eliminada.', 'success');
                }
                setPersonaAEliminar(null);
            });
        }
    }, [personaAEliminar]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Personas</h1>
            <AddButton />
            <PersonasTable personas={personas} onDelete={setPersonaAEliminar} />
        </div>
    );
};

export default PersonasList;
