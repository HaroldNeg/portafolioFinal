import { Injectable } from '@angular/core';
import { Equipo } from './../models/equipo';
import { datos } from './../mocks/mock-datos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //data: Equipo[] | null = datos;
  data: Equipo[] = datos;

  constructor() { }

  getList(): Equipo[] {
    return this.data;
  }

  //get(id: number): Equipo | null {
  get(id: number): Equipo | undefined {
    return this.data.find((r) => r.id === id);
  }




}
