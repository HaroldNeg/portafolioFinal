import { Competicion } from './competicion';
import { TipoSeleccion } from './tipoSeleccion.enum';
export interface Equipo {
  id: number;
  tipo: TipoSeleccion;
  competicion : Competicion[];
}
