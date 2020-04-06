import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { Funcoes } from "../funcoes.dto";
import { FuncionarioService } from "../services/funcionario.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FuncaoResolver implements Resolve<Observable<Funcoes[]>> {

    constructor(private funcionarioService: FuncionarioService){}

    resolve(): Observable<Funcoes[]>{
        return this.funcionarioService.getFuncoes();
    }
}