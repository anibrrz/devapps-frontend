import { useNavigate } from 'react-router-dom';
import { Auto } from '../../model/Auto';
import { deleteAuto } from '../../api/autosApi';
import Swal from 'sweetalert2';
import { Box, Button } from '@mui/material';

interface Props {
    auto: Auto;
}

const AutoActionButtons = ({ auto }: Props) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: '¿Estás seguro?',
            text: `Esta acción eliminará el auto con patente ${auto.patente}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6'
        });

        if (result.isConfirmed) {
            await deleteAuto(auto.id);
            await Swal.fire('Eliminado', 'El auto ha sido eliminado.', 'success');
            navigate('/autos');
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
                variant="contained"
                onClick={() => navigate(`/autos/${auto.id}/editar`)}
                sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
            >
                Editar auto
            </Button>
            <Button
                variant="contained"
                onClick={handleDelete}
                sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#c62828' } }}
            >
                Borrar auto
            </Button>
            <Button
                variant="contained"
                onClick={() => navigate(`/personas/${auto.dueñoId}`)}
                sx={{ backgroundColor: '#4caf50', '&:hover': { backgroundColor: '#43a047' } }}
            >
                Ver dueño
            </Button>
        </Box>
    );
};

export default AutoActionButtons;
