import { NgModule } from "@angular/core";

import { InserirModule } from "./inserir-funcionarios/inserir.module";
import { ListarModule } from "./listar-funcionarios/listar.module";
import { ListarFuncaoModule } from "./listar-funcoes/listar.funcao.module";
import { InserirFuncaoModule } from "./inserir-funcoes/inserir.funcao.module";

@NgModule({
    imports: [InserirModule, ListarModule, ListarFuncaoModule, InserirFuncaoModule],
    declarations: [],
    exports: []
})
export class FuncionarioModule {

}