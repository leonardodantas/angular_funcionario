import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListarFuncionariosComponent } from "./listar-funcionarios.component";
import { TableFuncComponent } from './table-func/table-func.component';
import { MenuNavbarModule } from "../menu-navbar/menu-navbar.module";
import { FuncionarioServiceModule } from "../services/funcionario.service.module";
import { PaginacaoComponent } from './paginacao/paginacao.component';
import { SearchFuncionariosComponent } from './search-funcionarios/search-funcionarios.component';
import { FilterByNome } from "./filter-by-nome.pipe";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        ListarFuncionariosComponent,
        TableFuncComponent,
        PaginacaoComponent,
        SearchFuncionariosComponent,
        FilterByNome
    ],
    imports:[CommonModule, MenuNavbarModule, FuncionarioServiceModule, RouterModule]
})
export class ListarModule {

}