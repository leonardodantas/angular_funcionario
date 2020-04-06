import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FuncionarioDTO } from "../funcionario.dto";
import { Funcoes } from "../funcoes.dto";
import { Observable } from "rxjs";
import { FuncionarioInserirDTO } from "../inserir-funcionarios/form/funcionari.inserir.dto";

const API = 'http://localhost:8080';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService {

    constructor(private httpClient: HttpClient ){}

    getFuncionarios() {
        return this.httpClient.get<FuncionarioDTO[]>(API + '/funcionarios');
    }

    getFuncoes(): Observable<Funcoes[]>{
        return this.httpClient.get<Funcoes[]>(API + '/funcoes');
    }

    inserirFuncionario(funcionario: FuncionarioInserirDTO) {
        return this.httpClient.post(API + '/funcionarios', funcionario);
    }
}