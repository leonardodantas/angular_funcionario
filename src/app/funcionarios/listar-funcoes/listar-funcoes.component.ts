import { Component, OnInit } from '@angular/core';
import { Funcoes } from '../funcoes.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-funcoes',
  templateUrl: './listar-funcoes.component.html',
  styleUrls: ['./listar-funcoes.component.css']
})
export class ListarFuncoesComponent implements OnInit {

  funcoes: Funcoes[];
  filter: string = '';

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.funcoes = this.activatedRouter.snapshot.data["funcoes"];
  }

}
