import { useState, useEffect } from 'react';
import { Genero } from '../../model/Persona';
import CampoTexto from '../../components/form/campoTexto';
import CampoFecha from '../../components/form/campoFecha';
import CampoSelectGenero from '../../components/form/campoSelectGenero';
import CampoCheckbox from '../../components/form/campoCheckbox';
import { SxProps, Theme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';

export type PersonaFormData = {
    nombre: string;
    apellido: string;
    dni: string;
    fechaNacimiento: string;
    genero: Genero;
    donante: boolean;
};

interface Props {
    initialData?: PersonaFormData;
    onSubmit: (data: PersonaFormData) => void;
    buttonLabel: string;
    buttonSx?: SxProps<Theme>;
}

const PersonaForm = ({ initialData, onSubmit, buttonLabel, buttonSx }: Props) => {
    const [persona, setPersona] = useState<PersonaFormData>({
        nombre: '',
        apellido: '',
        dni: '',
        fechaNacimiento: '',
        genero: Genero.Masculino,
        donante: false
    });

    useEffect(() => {
        if (initialData) {
            setPersona(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const input = e.target as HTMLInputElement;
            setPersona((prev) => ({
                ...prev,
                [name]: input.checked
            }));
        } else {
            setPersona((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleGeneroChange = (e: SelectChangeEvent<Genero>) => {
        const { value } = e.target;
        setPersona((prev) => ({
            ...prev,
            genero: value as Genero
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(persona);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '100%',
                maxWidth: 600,
                mx: 'auto',
                mt: 2
            }}
        >
            <CampoTexto label="DNI" name="dni" value={persona.dni} onChange={handleChange} required />
            <CampoTexto label="Nombre" name="nombre" value={persona.nombre} onChange={handleChange} required />
            <CampoTexto label="Apellido" name="apellido" value={persona.apellido} onChange={handleChange} required />
            <CampoFecha
                label="Fecha de Nacimiento"
                name="fechaNacimiento"
                value={persona.fechaNacimiento}
                onChange={handleChange}
                required
            />
            <CampoSelectGenero
                label="Género"
                name="genero"
                value={persona.genero}
                onChange={handleGeneroChange}
                required
            />
            <CampoCheckbox label="Donante" name="donante" checked={persona.donante} onChange={handleChange} />

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
        </Box>
    );
};

export default PersonaForm;
