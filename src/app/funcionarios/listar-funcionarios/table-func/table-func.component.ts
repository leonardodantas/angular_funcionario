import { Component, OnInit, Input } from '@angular/core';
import { FuncionarioDTO } from '../../funcionario.dto';

@Component({
  selector: 'app-table-func',
  templateUrl: './table-func.component.html',
  styleUrls: ['./table-func.component.css']
})
export class TableFuncComponent implements OnInit {

  @Input() funcionarios: FuncionarioDTO[];
  @Input() filter;

  constructor() { }

  ngOnInit() {
  }

}
