import { useNavigate } from 'react-router-dom';
import { Auto } from '../../model/Auto';
import {
    Box,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

interface Props {
    autos: Auto[];
    personaId: string;
}

const AutosDePersona = ({ autos, personaId }: Props) => {
    const navigate = useNavigate();

    const handleAgregarAuto = () => {
        navigate(`/personas/${personaId}/autos/nuevo`);
    };

    return (
        <Box sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Autos
            </Typography>

            <Box display="flex" justifyContent="center" mb={2}>
                <Button
                    variant="contained"
                    onClick={handleAgregarAuto}
                    sx={{
                        backgroundColor: '#4caf50',
                        color: '#fff',
                        '&:hover': { backgroundColor: '#43a047' }
                    }}
                >
                    Agregar auto
                </Button>
            </Box>

            <TableContainer>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {autos.map((auto) => (
                            <TableRow key={auto._id}>
                                <TableCell>{auto.patente}</TableCell>
                                <TableCell>{auto.marca}</TableCell>
                                <TableCell>{auto.modelo}</TableCell>
                                <TableCell>{auto.año}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AutosDePersona;
