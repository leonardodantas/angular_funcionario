import { Component, OnInit } from '@angular/core';
import { Funcoes } from '../funcoes.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inserir-funcionarios',
  templateUrl: './inserir-funcionarios.component.html',
  styleUrls: ['./inserir-funcionarios.component.css']
})
export class InserirFuncionariosComponent implements OnInit {

  funcoes: Funcoes[]

  constructor(private activeRouted: ActivatedRoute) { }

  ngOnInit() {
    this.funcoes = this.activeRouted.snapshot.data["funcoes"];
  }

}
