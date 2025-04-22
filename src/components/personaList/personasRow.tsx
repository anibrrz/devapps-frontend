import { useNavigate } from 'react-router-dom';
import { Persona } from '../../model/Persona';

interface Props {
    persona: Persona;
    onDelete: (persona: Persona) => void;
}

const PersonasRow = ({ persona, onDelete }: Props) => {
    const navigate = useNavigate();

    return (
        <tr className="border-b">
            <td className="p-2">{persona.dni}</td>
            <td className="p-2">{persona.nombre}</td>
            <td className="p-2">{persona.apellido}</td>
            <td className="p-2 space-x-2">
                <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => navigate(`/personas/${persona.id}`)}
                >
                    Ver
                </button>
                <button
                    className="bg-yellow-400 text-black px-2 py-1 rounded"
                    onClick={() => navigate(`/personas/${persona.id}/editar`)}
                >
                    Editar
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(persona)}>
                    Borrar
                </button>
            </td>
        </tr>
    );
};

export default PersonasRow;
