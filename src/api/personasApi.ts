import axios from 'axios';
import { Persona } from '../model/Persona';

const API_URL = 'http://localhost:3000/personas';

export const getAllPersonas = async (): Promise<Persona[]> => {
    const res = await axios.get<Persona[]>(API_URL);
    return res.data;
};

export const getPersonaById = async (id: string): Promise<Persona> => {
    const res = await axios.get<Persona>(`${API_URL}/${id}`);
    return res.data;
};

export const createPersona = async (persona: Omit<Persona, 'id'>): Promise<Persona> => {
    const res = await axios.post<Persona>(API_URL, persona);
    return res.data;
};

export const updatePersona = async (id: string, persona: Omit<Persona, 'id' | 'autos'>): Promise<Persona> => {
    const res = await axios.put<Persona>(`${API_URL}/${id}`, persona);
    return res.data;
};

export const deletePersona = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};
