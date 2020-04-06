import { NgModule } from "@angular/core";
import { MenuNavbarModule } from "../menu-navbar/menu-navbar.module";
import { InserirFuncoesComponent } from "./inserir-funcoes.component";
import { FormFuncaoComponent } from './form-funcao/form-funcao.component';

@NgModule({
    declarations:[
        InserirFuncoesComponent,
        FormFuncaoComponent
    ],
    imports: [MenuNavbarModule]
})
export class InserirFuncaoModule {}