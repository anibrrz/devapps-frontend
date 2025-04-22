import { Persona } from '../../model/Persona';

interface Props {
    persona: Persona;
}

const PersonaInfo = ({ persona }: Props) => {
    return (
        <div className="space-y-2">
            <div>
                <strong>Nombre:</strong> {persona.nombre}
            </div>
            <div>
                <strong>Apellido:</strong> {persona.apellido}
            </div>
            <div>
                <strong>DNI:</strong> {persona.dni}
            </div>
            <div>
                <strong>Fecha de nacimiento:</strong> {new Date(persona.fechaNacimiento).toLocaleDateString()}
            </div>
            <div>
                <strong>Género:</strong> {persona.genero}
            </div>
            <div>
                <strong>Donante:</strong> {persona.donante ? 'Sí' : 'No'}
            </div>
        </div>
    );
};

export default PersonaInfo;
