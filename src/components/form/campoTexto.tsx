import { TextField } from '@mui/material';

interface Props {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const CampoTexto = ({ label, name, value, onChange, required = false }: Props) => (
    <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        fullWidth
        margin="normal"
    />
);

export default CampoTexto;
