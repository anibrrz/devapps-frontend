import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AutoResumen } from '../../model/Auto';
import { deleteAuto, getAllAutos } from '../../api/autosApi';
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

const AutosList = () => {
    const [autos, setAutos] = useState<AutoResumen[]>([]);
    const [autoAEliminar, setAutoAEliminar] = useState<AutoResumen | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllAutos().then(setAutos);
    }, []);

    useEffect(() => {
        if (autoAEliminar) {
            Swal.fire({
                title: `¿Eliminar auto ${autoAEliminar.patente}?`,
                text: 'Esta acción no se puede deshacer.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6'
            }).then(async (resultado) => {
                if (resultado.isConfirmed) {
                    await deleteAuto(autoAEliminar.id);
                    setAutos((prev) => prev.filter((a) => a.id !== autoAEliminar.id));
                    Swal.fire('Eliminado', 'El auto fue eliminado exitosamente.', 'success');
                }
                setAutoAEliminar(null);
            });
        }
    }, [autoAEliminar]);

    return (
        <Layout>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
                    Autos
                </Typography>

                <TableContainer component={Paper} sx={{ maxWidth: 700, margin: '0 auto' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <strong>Patente</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Marca</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Modelo</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Año</strong>
                                </TableCell>
                                <TableCell>
                                    <strong>Acciones</strong>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {autos.map((auto) => (
                                <TableRow key={auto.id}>
                                    <TableCell>{auto.patente}</TableCell>
                                    <TableCell>{auto.marca}</TableCell>
                                    <TableCell>{auto.modelo}</TableCell>
                                    <TableCell>{auto.año}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={2}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => navigate(`/autos/${auto.id}`)}
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
                                                onClick={() => navigate(`/autos/${auto.id}/editar`)}
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
                                                onClick={() => setAutoAEliminar(auto)}
                                                sx={{
                                                    backgroundColor: '#d33',
                                                    color: '#fff',
                                                    '&:hover': { backgroundColor: '#b22e2e' }
                                                }}
                                            >
                                                Borrar
                                            </Button>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => navigate(`/personas/${auto.dueñoId}`)}
                                                sx={{
                                                    backgroundColor: '#4caf50',
                                                    color: '#fff',
                                                    '&:hover': { backgroundColor: '#43a047' }
                                                }}
                                            >
                                                Ver dueño
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

export default AutosList;
