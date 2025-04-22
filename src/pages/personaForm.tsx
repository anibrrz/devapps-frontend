import { useState, useEffect } from 'react';
import { Genero } from '../model/Persona';
import CampoTexto from '../components/form/campoTexto';
import CampoFecha from '../components/form/campoFecha';
import CampoSelectGenero from '../components/form/campoSelectGenero';
import CampoCheckbox from '../components/form/campoCheckbox';

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
}

const PersonaForm = ({ initialData, onSubmit, buttonLabel }: Props) => {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(persona);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
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
            <CampoSelectGenero value={persona.genero} onChange={handleChange} />
            <CampoCheckbox label="Donante" name="donante" checked={persona.donante} onChange={handleChange} />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                {buttonLabel}
            </button>
        </form>
    );
};

export default PersonaForm;
