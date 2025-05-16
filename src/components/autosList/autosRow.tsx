import { useNavigate } from 'react-router-dom';
import { AutoResumen } from '../../model/Auto';

type Props = {
    auto: AutoResumen;
    onDelete: (auto: AutoResumen) => void;
};

const AutosRow = ({ auto, onDelete }: Props) => {
    const navigate = useNavigate();

    const handleVer = () => navigate(`/autos/${auto.id}`);
    const handleEditar = () => navigate(`/autos/${auto.id}/editar`);
    const handleVerDuenio = () => navigate(`/personas/${auto.dueñoId}`);

    return (
        <tr>
            <td className="border px-4 py-2">{auto.patente}</td>
            <td className="border px-4 py-2">{auto.marca}</td>
            <td className="border px-4 py-2">{auto.modelo}</td>
            <td className="border px-4 py-2">{auto.año}</td>
            <td className="border px-4 py-2 flex gap-2 justify-center">
                <button onClick={handleVer} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    Ver
                </button>
                <button onClick={handleEditar} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                    Editar
                </button>
                <button
                    onClick={() => onDelete(auto)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Borrar
                </button>
                <button
                    onClick={handleVerDuenio}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                >
                    Ver dueño
                </button>
            </td>
        </tr>
    );
};

export default AutosRow;
