import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Swal from 'sweetalert2';
import { deletePersona } from '../../api/personasApi';

interface Props {
    personaId: string;
    nombre?: string;
    apellido?: string;
}

const ActionButtons = ({ personaId }: Props) => {
    const navigate = useNavigate();

    const handleEditar = () => {
        navigate(`/personas/${personaId}/editar`);
    };

    const handleEliminar = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, borrar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePersona(personaId).then(() => {
                    Swal.fire('Eliminado', 'La persona ha sido eliminada.', 'success');
                    navigate('/personas');
                });
            }
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
                variant="contained"
                onClick={handleEditar}
                sx={{
                    backgroundColor: '#1976d2',
                    '&:hover': { backgroundColor: '#1565c0' }
                }}
            >
                Editar persona
            </Button>
            <Button
                variant="contained"
                onClick={handleEliminar}
                sx={{
                    backgroundColor: '#d32f2f',
                    '&:hover': { backgroundColor: '#c62828' }
                }}
            >
                Borrar persona
            </Button>
        </Box>
    );
};

export default ActionButtons;
