import { Logros } from './../../models/logros';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit{

  @Input() logro !: Logros[];

  constructor() {}

  ngOnInit(): void {
  }

}
