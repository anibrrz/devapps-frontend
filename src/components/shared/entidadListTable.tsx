import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';

type EntidadListTableProps<T> = {
    titulo: string;
    columnas: string[];
    filas: T[];
    renderFila: (fila: T) => React.ReactNode[];
    renderAcciones: (fila: T) => React.ReactNode;
    accionesEncabezado?: React.ReactNode;
};

const EntidadListTable = <T,>({ titulo, columnas, filas, renderFila, renderAcciones }: EntidadListTableProps<T>) => {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#333' }}>
                {titulo}
            </Typography>

            <TableContainer component={Paper} sx={{ maxWidth: 700, margin: '0 auto' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columnas.map((columna) => (
                                <TableCell key={columna}>
                                    <strong>{columna}</strong>
                                </TableCell>
                            ))}
                            <TableCell>
                                <strong>Acciones</strong>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filas.map((fila, index) => (
                            <TableRow key={index}>
                                {renderFila(fila).map((celda, i) => (
                                    <TableCell key={i}>{celda}</TableCell>
                                ))}
                                <TableCell>{renderAcciones(fila)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default EntidadListTable;
