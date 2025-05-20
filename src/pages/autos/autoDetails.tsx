import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Auto } from '../../model/Auto';
import { getAutoById } from '../../api/autosApi';
import AutoInfo from '../../components/autoDetails/autoInfo';
import AutoActionButtons from '../../components/autoDetails/autoActionButtons';
import Layout from '../../components/layout/layout';
import { Box, Paper, Typography, Divider } from '@mui/material';

const AutoDetail = () => {
    const { id } = useParams();
    const [auto, setAuto] = useState<Auto | null>(null);

    useEffect(() => {
        if (id) {
            getAutoById(id).then(setAuto);
        }
    }, [id]);

    if (!auto) return <div>Cargando...</div>;

    return (
        <Layout>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Paper sx={{ padding: 4, maxWidth: 700, width: '100%' }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#333', textAlign: 'center' }}>
                        Detalle de Auto
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <AutoInfo auto={auto} />

                    <Divider sx={{ my: 2 }} />

                    <AutoActionButtons auto={auto} />
                </Paper>
            </Box>
        </Layout>
    );
};

export default AutoDetail;
