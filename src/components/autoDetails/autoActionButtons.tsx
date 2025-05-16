import { useNavigate } from 'react-router-dom';
import { Auto } from '../../model/Auto';
import { deleteAuto } from '../../api/autosApi';
import Swal from 'sweetalert2';

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
        <div className="space-x-2 mt-4">
            <button
                className="bg-yellow-400 text-black px-4 py-1 rounded"
                onClick={() => navigate(`/autos/${auto.id}/editar`)}
            >
                Editar
            </button>
            <button className="bg-red-500 text-white px-4 py-1 rounded" onClick={handleDelete}>
                Borrar
            </button>
            <button
                className="bg-gray-400 text-white px-4 py-1 rounded"
                onClick={() => navigate(`/personas/${auto.dueñoId}`)}
            >
                Ver dueño
            </button>
        </div>
    );
};

export default AutoActionButtons;
