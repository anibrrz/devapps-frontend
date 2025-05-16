import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import AutoDetail from './pages/autos/autoDetails';
import EditAuto from './pages/autos/editAuto';
import CreateAuto from './pages/autos/createAuto';
import PersonasList from './pages/personas/personasList';
import CreatePersona from './pages/personas/createPersona';
import PersonaDetail from './pages/personas/personaDetails';
import EditarPersona from './pages/personas/editPersona';
import AutosList from './pages/autos/autosList';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* generales */}
                <Route path="/" element={<Home />} />

                {/* Personas */}
                <Route path="/personas" element={<PersonasList />} />
                <Route path="/personas/nueva" element={<CreatePersona />} />
                <Route path="/personas/:id" element={<PersonaDetail />} />
                <Route path="/personas/:id/editar" element={<EditarPersona />} />

                {/* Autos */}
                <Route path="/autos" element={<AutosList />} />
                <Route path="/autos/:id" element={<AutoDetail />} />
                <Route path="/personas/:personaId/autos/nuevo" element={<CreateAuto />} />
                <Route path="/autos/:id/editar" element={<EditAuto />} />
            </Routes>
        </Router>
    );
};

export default App;
