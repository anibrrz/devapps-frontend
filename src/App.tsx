import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import PersonasList from './pages/personasList';
import AutosList from './pages/autosList';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personas" element={<PersonasList />} />
                <Route path="/autos" element={<AutosList />} />
            </Routes>
        </Router>
    );
};

export default App;
