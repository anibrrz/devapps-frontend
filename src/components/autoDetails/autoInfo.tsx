import { Auto } from '../../model/Auto';
import { Box, Typography } from '@mui/material';

interface Props {
    auto: Auto;
}

const AutoInfo = ({ auto }: Props) => {
    return (
        <Box sx={{ display: 'grid', gap: 1 }}>
            <Typography>
                <strong>Marca:</strong> {auto.marca}
            </Typography>
            <Typography>
                <strong>Modelo:</strong> {auto.modelo}
            </Typography>
            <Typography>
                <strong>Año:</strong> {auto.año}
            </Typography>
            <Typography>
                <strong>Color:</strong> {auto.color}
            </Typography>
            <Typography>
                <strong>Patente:</strong> {auto.patente}
            </Typography>
            <Typography>
                <strong>Número de chasis:</strong> {auto.numeroChasis}
            </Typography>
            <Typography>
                <strong>Motor:</strong> {auto.motor}
            </Typography>
        </Box>
    );
};

export default AutoInfo;
