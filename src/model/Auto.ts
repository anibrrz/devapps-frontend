export interface Auto {
    id: string;
    marca: string;
    modelo: string;
    año: number;
    patente: string;
    color: string;
    numeroChasis: string;
    motor: string;
    dueñoId: string;
}

export type AutoResumen = Pick<Auto, 'id' | 'marca' | 'modelo' | 'año' | 'patente' | 'dueñoId'>;
