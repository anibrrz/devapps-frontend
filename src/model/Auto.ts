export interface Auto {
    _id: string;
    marca: string;
    modelo: string;
    año: number;
    patente: string;
    color: string;
    numeroChasis: string;
    motor: string;
    dueñoId: string;
}

export type AutoResumen = Pick<Auto, '_id' | 'marca' | 'modelo' | 'año' | 'patente' | 'dueñoId'>;
