import { NgModule } from "@angular/core";
import { ListarFuncoesComponent } from "./listar-funcoes.component";
import { CommonModule } from "@angular/common";
import { MenuNavbarModule } from "../menu-navbar/menu-navbar.module";
import { TableFuncComponent } from './table-func/table-func.component';
import { SerachComponent } from './serach/serach.component';
import { FilterByFuncao } from "./filter-by-funcao";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ListarFuncoesComponent,
        TableFuncComponent,
        SerachComponent,
        FilterByFuncao
    ],
    imports: [CommonModule, MenuNavbarModule, RouterModule]
})
export class ListarFuncaoModule {

}