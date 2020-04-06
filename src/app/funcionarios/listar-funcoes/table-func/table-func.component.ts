import { Component, OnInit, Input } from '@angular/core';
import { Funcoes } from '../../funcoes.dto';

@Component({
  selector: 'app-table-func',
  templateUrl: './table-func.component.html',
  styleUrls: ['./table-func.component.css']
})
export class TableFuncComponent implements OnInit {

  @Input() funcoes: Funcoes[];

  constructor() { }

  ngOnInit() {
  }

}
