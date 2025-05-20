import { useNavigate } from 'react-router-dom';
import PersonaForm, { PersonaFormData } from './personaForm';
import { createPersona } from '../../api/personasApi';
import { Persona } from '../../model/Persona';
import Swal from 'sweetalert2';
import { Card, CardContent, Typography } from '@mui/material';

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
        <Card
            sx={{
                maxWidth: 600,
                margin: 'auto',
                mt: 5,
                boxShadow: 4,
                borderRadius: 4,
                backgroundColor: '#f8f9fa'
            }}
        >
            <CardContent sx={{ px: 4, py: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Nueva Persona
                </Typography>
                <PersonaForm
                    onSubmit={handleCreate}
                    buttonLabel="Crear"
                    buttonSx={{
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        mt: 2,
                        '&:hover': { backgroundColor: '#43a047' }
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default CreatePersona;
