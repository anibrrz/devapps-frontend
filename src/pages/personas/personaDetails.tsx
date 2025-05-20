import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Persona } from '../../model/Persona';
import { getPersonaById } from '../../api/personasApi';
import PersonaInfo from '../../components/personaDetails/personaInfo';
import AutosDePersona from '../../components/personaDetails/autosDePersona';
import ActionButtons from '../../components/personaDetails/actionButtons';
import Layout from '../../components/layout/layout';
import { Box, Paper, Typography, Divider } from '@mui/material';

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
        <Layout>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Paper sx={{ padding: 4, maxWidth: 700, width: '100%' }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#333', textAlign: 'center' }}>
                        Detalle de Persona
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <PersonaInfo persona={persona} />

                    <Divider sx={{ my: 2 }} />

                    <AutosDePersona autos={persona.autos ?? []} personaId={persona.id} />

                    <Divider sx={{ my: 2 }} />

                    <ActionButtons personaId={persona.id} nombre={persona.nombre} apellido={persona.apellido} />
                </Paper>
            </Box>
        </Layout>
    );
};

export default PersonaDetail;
