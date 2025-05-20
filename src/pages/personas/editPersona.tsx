import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PersonaForm, { PersonaFormData } from './personaForm';
import { getPersonaById, updatePersona } from '../../api/personasApi';
import { Persona } from '../../model/Persona';
import Swal from 'sweetalert2';
import { Card, CardContent, Typography } from '@mui/material';

const EditarPersona = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState<PersonaFormData | null>(null);

    useEffect(() => {
        if (id) {
            getPersonaById(String(id)).then((data: Persona) => {
                const formattedData: PersonaFormData = {
                    nombre: data.nombre,
                    apellido: data.apellido,
                    dni: data.dni,
                    fechaNacimiento: new Date(data.fechaNacimiento).toISOString().split('T')[0],
                    genero: data.genero,
                    donante: data.donante
                };
                setInitialData(formattedData);
            });
        }
    }, [id]);

    const handleUpdate = async (data: PersonaFormData) => {
        if (id) {
            const personaToUpdate = {
                ...data,
                fechaNacimiento: new Date(data.fechaNacimiento)
            };

            await updatePersona(String(id), personaToUpdate);

            await Swal.fire({
                title: 'Persona editada',
                text: 'La persona fue editada exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6'
            });

            navigate('/personas');
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
                    Editar Persona
                </Typography>
                {initialData ? (
                    <PersonaForm
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

export default EditarPersona;
