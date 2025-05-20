import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Genero } from '../../model/Persona';

interface Props {
    label: string;
    name: string;
    value: Genero;
    onChange: (e: SelectChangeEvent<Genero>) => void;
    required?: boolean;
}

const CampoSelectGenero = ({ label, name, value, onChange, required = false }: Props) => (
    <FormControl fullWidth margin="normal" required={required}>
        <InputLabel>{label}</InputLabel>
        <Select<Genero> name={name} value={value} onChange={onChange} label={label}>
            <MenuItem value={Genero.Masculino}>Masculino</MenuItem>
            <MenuItem value={Genero.Femenino}>Femenino</MenuItem>
            <MenuItem value={Genero.NoBinario}>NoBinario</MenuItem>
        </Select>
    </FormControl>
);

export default CampoSelectGenero;
