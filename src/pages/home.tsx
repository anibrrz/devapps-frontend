import { useNavigate } from 'react-router-dom';
import { Typography, Button, Stack, Box } from '@mui/material';
import Layout from '../components/layout/layout';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <Box sx={{ transform: 'translateY(-15vh)' }}>
                <Typography variant="h3" gutterBottom sx={{ color: '#444', mb: 4 }}>
                    Bienvenido
                </Typography>

                <Stack direction="row" spacing={3} justifyContent="center">
                    <Button
                        variant="contained"
                        onClick={() => navigate('/personas')}
                        sx={{
                            backgroundColor: '#3085d6',
                            color: '#fff',
                            minWidth: 130,
                            '&:hover': {
                                backgroundColor: '#2c75c1'
                            }
                        }}
                    >
                        Personas
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/autos')}
                        sx={{
                            backgroundColor: '#d33',
                            color: '#fff',
                            minWidth: 100,
                            '&:hover': {
                                backgroundColor: '#b22e2e'
                            }
                        }}
                    >
                        Autos
                    </Button>
                </Stack>
            </Box>
        </Layout>
    );
};

export default Home;
