import { AutoResumen } from '../../model/Auto';
import AutosRow from './autosRow';

type Props = {
    autos: AutoResumen[];
    onDelete: (auto: AutoResumen) => void;
};

const AutosTable = ({ autos, onDelete }: Props) => {
    return (
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className="border px-4 py-2">Patente</th>
                    <th className="border px-4 py-2">Marca</th>
                    <th className="border px-4 py-2">Modelo</th>
                    <th className="border px-4 py-2">Año</th>
                    <th className="border px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {autos.length > 0 ? (
                    autos.map((auto) => <AutosRow key={auto.id} auto={auto} onDelete={onDelete} />)
                ) : (
                    <tr>
                        <td colSpan={5} className="text-center py-4">
                            No hay autos para mostrar.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default AutosTable;
