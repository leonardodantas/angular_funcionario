import { PipeTransform, Pipe } from "@angular/core";
import { FuncionarioDTO } from "../funcionario.dto";

@Pipe({
    name: 'filterByNome'
})
export class FilterByNome implements PipeTransform{
    
    transform(funcionarios: FuncionarioDTO[], name: string){
        name = name.toLowerCase();
        if(name.length > 0)
            return funcionarios.filter(func => func.nome.toLowerCase().includes(name))
        return funcionarios;
    }
} 