import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Persona } from '../model/Persona';
import { getPersonaById } from '../api/personasApi';
import PersonaInfo from '../components/personaDetails/personaInfo';
import AutosDePersona from '../components/personaDetails/autosDePersona';
import ActionButtons from '../components/personaDetails/actionButtons';

const PersonaDetail = () => {
    const { id } = useParams();
    const [persona, setPersona] = useState<Persona | null>(null);

    useEffect(() => {
        if (id) {
            getPersonaById(id).then(setPersona);
        }
    }, [id]);

    if (!persona) return <div>Cargando...</div>;

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Detalle de Persona</h1>
            <PersonaInfo persona={persona} />
            <AutosDePersona autos={persona.autos ?? []} personaId={persona.id} />
            <ActionButtons personaId={persona.id} />
        </div>
    );
};

export default PersonaDetail;
