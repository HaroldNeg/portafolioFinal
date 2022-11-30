import { Equipo } from './../../models/equipo';
import { DatosService } from './../../service/datos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-selecciones',
  templateUrl: './selecciones.component.html',
  styleUrls: ['./selecciones.component.css']
})
export class SeleccionesComponent {

  datos !: Equipo[];
  public activeIndex : number = 0;

  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.datos = this.datosService.getList();
  }

  public selectTab(index:number) {
    this.activeIndex = index;
  }

}
