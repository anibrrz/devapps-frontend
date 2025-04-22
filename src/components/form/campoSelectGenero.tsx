import { Genero } from '../../model/Persona';

interface Props {
    value: Genero;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CampoSelectGenero = ({ value, onChange }: Props) => (
    <div>
        <label className="block">Género:</label>
        <select name="genero" value={value} onChange={onChange} className="border px-2 py-1 w-full" required>
            {Object.values(Genero).map((g) => (
                <option key={g} value={g}>
                    {g}
                </option>
            ))}
        </select>
    </div>
);

export default CampoSelectGenero;
