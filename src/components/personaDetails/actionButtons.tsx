import { useNavigate } from 'react-router-dom';
import { deletePersona } from '../../api/personasApi';
import Swal from 'sweetalert2';

interface Props {
    personaId: string;
    nombre?: string;
    apellido?: string;
}

const ActionButtons = ({ personaId, nombre, apellido }: Props) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const resultado = await Swal.fire({
            title: '¿Estás seguro?',
            text: `Esta acción eliminará a ${nombre ?? 'esta'} ${apellido ?? 'persona'}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6'
        });

        if (resultado.isConfirmed) {
            await deletePersona(personaId);
            await Swal.fire('Eliminado', 'La persona ha sido eliminada.', 'success');
            navigate('/personas');
        }
    };

    return (
        <div className="space-x-2 mt-4">
            <button
                className="bg-yellow-400 text-black px-4 py-1 rounded"
                onClick={() => navigate(`/personas/${personaId}/editar`)}
            >
                Editar
            </button>
            <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={handleDelete}>
                Borrar
            </button>
        </div>
    );
};

export default ActionButtons;
