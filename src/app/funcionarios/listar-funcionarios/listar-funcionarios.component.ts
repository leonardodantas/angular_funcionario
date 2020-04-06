import { Component, OnInit } from '@angular/core';
import { FuncionarioDTO } from '../funcionario.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: FuncionarioDTO[];
  filter: string = '';

  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.funcionarios = this.activatedRouter.snapshot.data["funcionarios"]
  }

  paginacao(){
    console.log('leo')
  }

}
