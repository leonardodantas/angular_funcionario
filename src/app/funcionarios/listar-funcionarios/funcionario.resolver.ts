import { FuncionarioService } from "../services/funcionario.service";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { FuncionarioDTO } from "../funcionario.dto";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FuncionarioResolver implements Resolve<Observable<FuncionarioDTO[]>> {

    constructor(private funcionarioService: FuncionarioService){}

    resolve(): Observable<FuncionarioDTO[]>{
        return this.funcionarioService.getFuncionarios();
    }
} 