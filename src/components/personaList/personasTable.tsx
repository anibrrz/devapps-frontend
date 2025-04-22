import { Persona } from '../../model/Persona';
import PersonasRow from './personasRow';

interface Props {
    personas: Persona[];
    onDelete: (persona: Persona) => void;
}

const PersonasTable = ({ personas, onDelete }: Props) => {
    return (
        <table className="w-full border">
            <thead className="bg-gray-200">
                <tr>
                    <th className="p-2">DNI</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Apellido</th>
                    <th className="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map((persona) => (
                    <PersonasRow key={persona.id} persona={persona} onDelete={onDelete} />
                ))}
            </tbody>
        </table>
    );
};

export default PersonasTable;
