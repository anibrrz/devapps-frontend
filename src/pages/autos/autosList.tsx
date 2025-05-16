import { useEffect, useState } from 'react';
import { AutoResumen } from '../../model/Auto';
import { deleteAuto, getAllAutos } from '../../api/autosApi';
import Swal from 'sweetalert2';
import AutosTable from '../../components/autosList/autosTable';

const AutosList = () => {
    const [autos, setAutos] = useState<AutoResumen[]>([]);

    useEffect(() => {
        getAllAutos().then(setAutos);
    }, []);

    const handleDelete = async (auto: AutoResumen) => {
        const result = await Swal.fire({
            title: `¿Eliminar auto ${auto.patente}?`,
            text: 'Esta acción no se puede deshacer.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            await deleteAuto(auto.id);
            setAutos((prev) => prev.filter((a) => a.id !== auto.id));
            Swal.fire('Eliminado', 'El auto fue eliminado exitosamente.', 'success');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Autos</h1>
            <AutosTable autos={autos} onDelete={handleDelete} />
        </div>
    );
};

export default AutosList;
