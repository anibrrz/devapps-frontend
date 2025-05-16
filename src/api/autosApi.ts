import { Auto, AutoResumen } from '../model/Auto';

const API_URL = 'http://localhost:3000/autos';

export const getAllAutos = async (): Promise<AutoResumen[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error('Error al obtener la lista de autos');
    }
    return res.json();
};

export const getAutoById = async (id: string): Promise<Auto> => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
        throw new Error('Error al obtener el auto');
    }
    return res.json();
};

export const updateAuto = async (id: string, auto: Partial<Auto>): Promise<Auto> => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(auto),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.mensaje || 'Error al actualizar auto');
    }
    return res.json();
};

export const deleteAuto = async (id: string): Promise<void> => {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.mensaje || 'Error al borrar auto');
    }
};
