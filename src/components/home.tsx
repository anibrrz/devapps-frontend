import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Bienvenido</h1>
            <button onClick={() => navigate('/personas')}>Personas</button>
            <button onClick={() => navigate('/autos')} style={{ marginLeft: '10px' }}>
                Autos
            </button>
        </div>
    );
};

export default Home;
