import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAutoById, updateAuto } from '../../api/autosApi';
import { Auto } from '../../model/Auto';
import AutoForm, { AutoFormData } from './autoForm';
import Swal from 'sweetalert2';

const EditAuto = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<AutoFormData | null>(null);

    useEffect(() => {
        if (id) {
            getAutoById(id).then((data: Auto) => {
                console.log('Auto obtenido para editar:', data);
                setInitialData({
                    marca: data.marca,
                    modelo: data.modelo,
                    año: data.año.toString(),
                    patente: data.patente,
                    color: data.color,
                    numeroChasis: data.numeroChasis,
                    motor: data.motor
                });
            });
        }
    }, [id]);

    const handleUpdate = async (data: AutoFormData) => {
        try {
            if (!id) return;

            const autoToUpdate = {
                ...data,
                año: parseInt(data.año, 10)
            };

            console.log('Actualizando auto con id:', id, autoToUpdate);
            await updateAuto(id, autoToUpdate);

            await Swal.fire('Actualizado', 'El auto fue actualizado exitosamente', 'success');
            navigate('/autos');
        } catch (error) {
            console.error('Error al actualizar el auto:', error);
            await Swal.fire('Error', 'Hubo un problema al actualizar el auto.', 'error');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Editar Auto</h2>
            {initialData ? (
                <AutoForm initialData={initialData} onSubmit={handleUpdate} buttonLabel="Guardar Cambios" />
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default EditAuto;
