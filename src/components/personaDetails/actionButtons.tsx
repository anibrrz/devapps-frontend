import { useNavigate } from 'react-router-dom';
import { deletePersona } from '../../api/personasApi';

interface Props {
    personaId: string;
}

const ActionButtons = ({ personaId }: Props) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas borrar esta persona?');
        if (confirmDelete) {
            await deletePersona(personaId);
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
