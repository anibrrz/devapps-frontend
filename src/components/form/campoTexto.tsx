interface Props {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const CampoTexto = ({ label, name, value, onChange, required = false }: Props) => (
    <div>
        <label className="block">{label}</label>
        <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="border px-2 py-1 w-full"
            required={required}
        />
    </div>
);

export default CampoTexto;
