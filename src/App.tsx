import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import PersonasList from './pages/personasList';
import AutosList from './pages/autosList';
import PersonaDetail from './pages/personaDetails';
import EditarPersona from './pages/editPersona';
import CreatePersona from './pages/createPersona';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personas" element={<PersonasList />} />
                <Route path="/autos" element={<AutosList />} />
                <Route path="/personas/:id" element={<PersonaDetail />} />
                <Route path="/personas/nueva" element={<CreatePersona />} />
                <Route path="/personas/:id/editar" element={<EditarPersona />} />
                <Route path="/personas/:id" element={<EditarPersona />} />
            </Routes>
        </Router>
    );
};

export default App;
