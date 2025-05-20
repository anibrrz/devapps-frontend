import { useState, useEffect } from 'react';
import CampoTexto from '../../components/form/campoTexto';
import { Button } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

export type AutoFormData = {
    marca: string;
    modelo: string;
    año: string;
    patente: string;
    color: string;
    numeroChasis: string;
    motor: string;
};

interface Props {
    initialData?: AutoFormData;
    onSubmit: (data: AutoFormData) => void;
    buttonLabel: string;
    buttonSx?: SxProps<Theme>;
}

const AutoForm = ({ initialData, onSubmit, buttonLabel, buttonSx }: Props) => {
    const [auto, setAuto] = useState<AutoFormData>({
        marca: '',
        modelo: '',
        año: '',
        patente: '',
        color: '',
        numeroChasis: '',
        motor: ''
    });

    useEffect(() => {
        if (initialData) {
            setAuto(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAuto((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(auto);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
            <CampoTexto label="Marca" name="marca" value={auto.marca} onChange={handleChange} required />
            <CampoTexto label="Modelo" name="modelo" value={auto.modelo} onChange={handleChange} required />
            <CampoTexto label="Año" name="año" value={auto.año} onChange={handleChange} required />
            <CampoTexto label="Patente" name="patente" value={auto.patente} onChange={handleChange} required />
            <CampoTexto label="Color" name="color" value={auto.color} onChange={handleChange} required />
            <CampoTexto
                label="Número de chasis"
                name="numeroChasis"
                value={auto.numeroChasis}
                onChange={handleChange}
                required
            />
            <CampoTexto label="Motor" name="motor" value={auto.motor} onChange={handleChange} required />

            <Button
                type="submit"
                variant="contained"
                sx={{
                    width: '100%',
                    ...buttonSx
                }}
            >
                {buttonLabel}
            </Button>
        </form>
    );
};

export default AutoForm;
