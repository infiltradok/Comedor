export interface Beneficiario {
  id?: number;        // opcional, porque el backend lo genera
  nombre: string;
  apellido: string;
  dni: string;
  edad: number;
  direccion: string;
}
