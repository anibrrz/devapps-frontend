import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Persona } from '../../model/Persona';
import { deletePersona, getAllPersonas } from '../../api/personasApi';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Stack
} from '@mui/material';
import Layout from '../../components/layout/layout';

const PersonasList = () => {
    const [personas, setPersonas] = useState<Persona[]>([]);
    const [personaAEliminar, setPersonaAEliminar] = useState<Persona | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllPersonas().then(setPersonas);
    }, []);

    useEffect(() => {
        if (personaAEliminar) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: `Esta acción eliminará a ${personaAEliminar.nombre} ${personaAEliminar.apellido}.`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6'
            }).then(async (resultado) => {
                if (resultado.isConfirmed) {
                    await deletePersona(personaAEliminar.id);
                    setPersonas((prev) => prev.filter((p) => p.id !== personaAEliminar.id));
                    Swal.fire('Eliminado', 'La persona ha sido eliminada.', 'success');
                }
                setPersonaAEliminar(null);
            });
        }
    }, [personaAEliminar]);

    return (
        <Layout>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
                    Personas
                </Typography>

                <Button
                    variant="contained"
                    onClick={() => navigate('/personas/nueva')}
                    sx={{
                        mb: 2,
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#43a047' }
                    }}
                >
                    Agregar nueva
                </Button>

                <TableContainer component={Paper} sx={{ maxWidth: 600, margin: '0 auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>DNI</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Nombre</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Apellido</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Acciones</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {personas.map((persona) => (
                                <TableRow key={persona.id}>
                                    <TableCell>{persona.dni}</TableCell>
                                    <TableCell>{persona.nombre}</TableCell>
                                    <TableCell>{persona.apellido}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={3}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => navigate(`/personas/${persona.id}`)}
                                                sx={{
                                                    backgroundColor: '#3085d6',
                                                    color: '#fff',
                                                    '&:hover': { backgroundColor: '#2c75c1' }
                                                }}
                                            >
                                                Ver
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => navigate(`/personas/${persona.id}/editar`)}
                                                sx={{
                                                    backgroundColor: '#ffe066',
                                                    color: '#000',
                                                    '&:hover': { backgroundColor: '#ffdb4d' }
                                                }}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => setPersonaAEliminar(persona)}
                                                sx={{
                                                    backgroundColor: '#d33',
                                                    color: '#fff',
                                                    '&:hover': { backgroundColor: '#b22e2e' }
                                                }}
                                            >
                                                Borrar
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    );
};

export default PersonasList;
