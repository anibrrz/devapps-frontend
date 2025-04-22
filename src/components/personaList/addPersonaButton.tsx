import { useNavigate } from 'react-router-dom';

const AddButton = () => {
    const navigate = useNavigate();

    return (
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-4" onClick={() => navigate('/personas/nueva')}>
            Agregar nueva
        </button>
    );
};

export default AddButton;
