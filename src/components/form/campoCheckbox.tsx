import { Checkbox, FormControlLabel } from '@mui/material';

interface Props {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CampoCheckbox = ({ label, name, checked, onChange }: Props) => (
    <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} name={name} />} label={label} />
);

export default CampoCheckbox;
