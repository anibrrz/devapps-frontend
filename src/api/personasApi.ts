import axios from 'axios';
import { Persona } from '../model/Persona';
import { Auto } from '../model/Auto';

const API_URL = 'http://localhost:3000/personas';

export const getAllPersonas = async (): Promise<Persona[]> => {
    const res = await axios.get<Persona[]>(API_URL);
    return res.data;
};

export const getPersonaById = async (id: string): Promise<Persona> => {
    const res = await axios.get<Persona>(`${API_URL}/${id}`);
    return res.data;
};

export const createPersona = async (persona: Omit<Persona, '_id'>): Promise<Persona> => {
    const res = await axios.post<Persona>(API_URL, persona);
    return res.data;
};

export const createAutoParaPersona = async (auto: Omit<Auto, '_id'>): Promise<Auto> => {
    const res = await fetch(`${API_URL}/${auto.dueñoId}/autos`, {
        method: 'POST',
        body: JSON.stringify(auto),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.mensaje || 'Error al crear auto');
    }
    return res.json();
};

export const updatePersona = async (id: string, persona: Omit<Persona, '_id' | 'autos'>): Promise<Persona> => {
    const res = await axios.put<Persona>(`${API_URL}/${id}`, persona);
    return res.data;
};

export const deletePersona = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
