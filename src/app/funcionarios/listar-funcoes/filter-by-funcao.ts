import { PipeTransform, Pipe } from "@angular/core";
import { Funcoes } from "../funcoes.dto";

@Pipe({
    name: 'filterByFuncao'
})
export class FilterByFuncao implements PipeTransform {

    transform(funcoes: Funcoes[], funcaoNome: string){
        funcaoNome = funcaoNome.toLowerCase();
        if(funcaoNome.length > 0)
            return funcoes.filter(funcao => funcao.nomeFuncao.toLowerCase().includes(funcaoNome))
        return funcoes;
    }
}