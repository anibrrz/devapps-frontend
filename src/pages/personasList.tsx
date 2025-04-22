import { useEffect, useState } from 'react';
import { Persona } from '../model/Persona';
import { deletePersona, getAllPersonas } from '../api/personasApi';
import AddButton from '../components/personaList/addPersonaButton';
import ConfirmationPopup from '../components/personaList/confirmationPopup';
import PersonasTable from '../components/personaList/personasTable';

const PersonasList = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [personaAEliminar, setPersonaAEliminar] = useState<Persona | null>(null);

    useEffect(() => {
        getAllPersonas().then(setPersonas);
    }, []);

    const confirmarEliminacion = async () => {
        if (personaAEliminar) {
            await deletePersona(personaAEliminar.id);
            setPersonas(personas.filter((p) => p.id !== personaAEliminar.id));
            setPersonaAEliminar(null);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Personas</h1>
            <AddButton />
            <PersonasTable personas={personas} onDelete={setPersonaAEliminar} />
            {personaAEliminar && (
                <ConfirmationPopup
                    mensaje={`¿Estás seguro que deseas eliminar a ${personaAEliminar.nombre} ${personaAEliminar.apellido}?`}
                    onConfirm={confirmarEliminacion}
                    onCancel={() => setPersonaAEliminar(null)}
                />
            )}
        </div>
    );
};

export default PersonasList;
