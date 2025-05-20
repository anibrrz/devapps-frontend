import { Persona } from '../../model/Persona';
import { Box, Typography } from '@mui/material';

interface Props {
    persona: Persona;
}

const PersonaInfo = ({ persona }: Props) => {
    return (
        <Box sx={{ display: 'grid', gap: 1 }}>
            <Typography>
                <strong>Nombre:</strong> {persona.nombre}
            </Typography>
            <Typography>
                <strong>Apellido:</strong> {persona.apellido}
            </Typography>
            <Typography>
                <strong>DNI:</strong> {persona.dni}
            </Typography>
            <Typography>
                <strong>Fecha de nacimiento:</strong> {new Date(persona.fechaNacimiento).toLocaleDateString()}
            </Typography>
            <Typography>
                <strong>Género:</strong> {persona.genero}
            </Typography>
            <Typography>
                <strong>Donante:</strong> {persona.donante ? 'Sí' : 'No'}
            </Typography>
        </Box>
    );
};

export default PersonaInfo;
