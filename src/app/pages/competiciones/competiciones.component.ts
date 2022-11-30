import { Competicion } from './../../models/competicion';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-competiciones',
  templateUrl: './competiciones.component.html',
  styleUrls: ['./competiciones.component.css']
})
export class CompeticionesComponent implements OnInit{

  @Input() competicion !: Competicion[];
  @Input() id !: Number;
  public activeIndex : number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(this.competicion);
  }

  public selectTab(index:number) {
    this.activeIndex = index;
  }

}
