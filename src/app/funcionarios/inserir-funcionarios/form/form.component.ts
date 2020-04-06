import { Component, OnInit, Input } from '@angular/core';
import { Funcoes } from '../../funcoes.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FuncionarioInserirDTO } from './funcionari.inserir.dto';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() funcoes: Funcoes[];
  funcionarioForm: FormGroup;
  inseridoSucesso: boolean;
  inseridoFalha: boolean;

  constructor(private formBuilder: FormBuilder, private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarioForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      dataNascimento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(40)]],
      idFuncao: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11)]]
    })
  }

  inserirFuncionario(){
    this.inseridoFalha = false;
    this.inseridoSucesso = false;
    const funcionario = this.funcionarioForm.getRawValue() as FuncionarioInserirDTO;
    this.funcionarioService.inserirFuncionario(funcionario)
      .subscribe(
        ()=> {
          this.inseridoSucesso = true;
          this.funcionarioForm.reset();
        },
        err => this.inseridoFalha = true,
      )
  }

} 
