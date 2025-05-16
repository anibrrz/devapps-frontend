import { Auto } from '../../model/Auto';

interface Props {
    auto: Auto;
}

const AutoInfo = ({ auto }: Props) => {
    return (
        <div className="space-y-2">
            <div>
                <strong>Marca:</strong> {auto.marca}
            </div>
            <div>
                <strong>Modelo:</strong> {auto.modelo}
            </div>
            <div>
                <strong>Año:</strong> {auto.año}
            </div>
            <div>
                <strong>Patente:</strong> {auto.patente}
            </div>
            <div>
                <strong>Año:</strong> {auto.color}
            </div>
            <div>
                <strong>Año:</strong> {auto.numeroChasis}
            </div>
            <div>
                <strong>Año:</strong> {auto.motor}
            </div>
        </div>
    );
};

export default AutoInfo;
