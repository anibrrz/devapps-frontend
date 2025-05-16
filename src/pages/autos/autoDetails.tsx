import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Auto } from '../../model/Auto';
import { getAutoById } from '../../api/autosApi';
import AutoInfo from '../../components/autoDetails/autoInfo';
import AutoActionButtons from '../../components/autoDetails/autoActionButtons';

const AutoDetail = () => {
    const { id } = useParams();
    const [auto, setAuto] = useState<Auto | null>(null);

    useEffect(() => {
        if (id) {
            getAutoById(id).then(setAuto);
        }
    }, [id]);

    if (!auto) return <div className="p-4">Cargando...</div>;

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Detalle de Auto</h1>
            <AutoInfo auto={auto} />
            <AutoActionButtons auto={auto} />
        </div>
    );
};

export default AutoDetail;
