import React from 'react';

interface ConfirmationPopupProps {
    mensaje: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ mensaje, onConfirm, onCancel }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="mb-4 text-lg">{mensaje}</p>
                <div className="flex justify-around">
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={onConfirm}>
                        Confirmar
                    </button>
                    <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={onCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
