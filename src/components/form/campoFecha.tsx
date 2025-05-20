import { TextField } from '@mui/material';

interface Props {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const CampoFecha = ({ label, name, value, onChange, required = false }: Props) => (
    <TextField
        label={label}
        name={name}
        type="date"
        value={value}
        onChange={onChange}
        required={required}
        fullWidth
        margin="normal"
        slotProps={{
            inputLabel: { shrink: true }
        }}
    />
);

export default CampoFecha;
