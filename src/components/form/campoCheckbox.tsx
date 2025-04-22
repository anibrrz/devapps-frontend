interface Props {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CampoCheckbox = ({ label, name, checked, onChange }: Props) => (
    <div className="flex items-center gap-2">
        <label htmlFor={name}>{label}</label>
        <input type="checkbox" id={name} name={name} checked={checked} onChange={onChange} />
    </div>
);

export default CampoCheckbox;
