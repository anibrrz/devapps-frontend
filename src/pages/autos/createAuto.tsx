import { useNavigate, useParams } from 'react-router-dom';
import { Auto } from '../../model/Auto';
import AutoForm, { AutoFormData } from './autoForm';
import { createAutoParaPersona } from '../../api/personasApi';
import Swal from 'sweetalert2';

const CreateAuto = () => {
    const { personaId } = useParams<{ personaId: string }>();
    const navigate = useNavigate();

    const handleCreate = async (data: AutoFormData) => {
        if (!personaId) return;

        const autoToCreate: Omit<Auto, 'id'> = {
            ...data,
            año: parseInt(data.año, 10),
            dueñoId: personaId
        };

        await createAutoParaPersona(autoToCreate);

        await Swal.fire({
            title: 'Auto creado',
            text: 'El auto fue creado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6'
        });
        navigate(`/personas/${personaId}`);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Nuevo Auto</h2>
            <AutoForm onSubmit={handleCreate} buttonLabel="Crear" />
        </div>
    );
};

export default CreateAuto;
