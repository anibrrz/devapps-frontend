import { useNavigate, useParams } from 'react-router-dom';
import AutoForm, { AutoFormData } from './autoForm';
import { createAutoParaPersona } from '../../api/personasApi';
import { Auto } from '../../model/Auto';
import Swal from 'sweetalert2';
import { Card, CardContent, Typography } from '@mui/material';

const CreateAuto = () => {
    const { personaId } = useParams<{ personaId: string }>();
    const navigate = useNavigate();

    const handleCreate = async (data: AutoFormData) => {
        if (!personaId) return;

        const autoToCreate: Omit<Auto, '_id'> = {
            ...data,
            año: parseInt(data.año, 10),
            dueñoId: personaId
        };

        await createAutoParaPersona(autoToCreate);

        await Swal.fire({
            title: 'Auto creado',
            text: 'El auto fue creado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6'
        });

        navigate(`/personas/${personaId}`);
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
                    Nuevo Auto
                </Typography>
                <AutoForm
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

export default CreateAuto;
