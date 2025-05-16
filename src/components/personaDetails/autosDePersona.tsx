import { useNavigate } from 'react-router-dom';
import { Auto } from '../../model/Auto';

interface Props {
    autos: Auto[];
    personaId: string;
}

const AutosDePersona = ({ autos, personaId }: Props) => {
    const navigate = useNavigate();

    const handleAgregarAuto = () => {
        navigate(`/personas/${personaId}/autos/nuevo`);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold">Autos</h2>
            <button className="bg-green-500 text-white px-3 py-1 rounded mb-2" onClick={handleAgregarAuto}>
                Agregar nuevo
            </button>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">Patente</th>
                        <th className="border p-2">Marca</th>
                        <th className="border p-2">Modelo</th>
                        <th className="border p-2">Año</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map((auto) => (
                        <tr key={auto.id} className="border-t">
                            <td className="p-2">{auto.patente}</td>
                            <td className="p-2">{auto.marca}</td>
                            <td className="p-2">{auto.modelo}</td>
                            <td className="p-2">{auto.año}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AutosDePersona;
