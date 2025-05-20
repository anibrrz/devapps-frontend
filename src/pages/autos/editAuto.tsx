import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAutoById, updateAuto } from '../../api/autosApi';
import { Auto } from '../../model/Auto';
import AutoForm, { AutoFormData } from './autoForm';
import Swal from 'sweetalert2';
import { Card, CardContent, Typography } from '@mui/material';

const EditAuto = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<AutoFormData | null>(null);

    useEffect(() => {
        if (id) {
            getAutoById(id).then((data: Auto) => {
                const formattedData: AutoFormData = {
                    marca: data.marca,
                    modelo: data.modelo,
                    año: data.año.toString(),
                    patente: data.patente,
                    color: data.color,
                    numeroChasis: data.numeroChasis,
                    motor: data.motor
                };
                setInitialData(formattedData);
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

            await updateAuto(id, autoToUpdate);

            await Swal.fire({
                title: 'Auto editado',
                text: 'El auto fue editado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6'
            });

            navigate('/autos');
        } catch (error) {
            console.error('Error al actualizar el auto:', error);
            await Swal.fire('Error', 'Hubo un problema al actualizar el auto.', 'error');
        }
    };

    return (
        <Card
            sx={{
                maxWidth: 600,
                margin: 'auto',
                mt: 5,
                boxShadow: 4,
                borderRadius: 4,
                backgroundColor: '#f8f9fa'
            }}
        >
            <CardContent sx={{ px: 4, py: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Editar Auto
                </Typography>
                {initialData ? (
                    <AutoForm
                        initialData={initialData}
                        onSubmit={handleUpdate}
                        buttonLabel="Guardar Cambios"
                        buttonSx={{
                            backgroundColor: '#4caf50',
                            color: '#fff',
                            mt: 2,
                            '&:hover': { backgroundColor: '#43a047' }
                        }}
                    />
                ) : (
                    <Typography align="center">Cargando datos...</Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default EditAuto;
