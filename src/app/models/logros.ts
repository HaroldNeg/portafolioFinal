import { Jugadores } from "./jugadores";

export interface Logros {
  categoria : string;
  anio : number;
  puesto : string;
  observaciones ?: string;
  sede ?: string;
}
