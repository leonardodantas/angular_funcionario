import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { InserirFuncionariosComponent } from "./inserir-funcionarios.component";
import { MenuNavbarModule } from "../menu-navbar/menu-navbar.module";
import { FormComponent } from './form/form.component';
import { FuncionarioServiceModule } from "../services/funcionario.service.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations:[
        InserirFuncionariosComponent,
        FormComponent
    ],
    imports: [CommonModule, MenuNavbarModule, FuncionarioServiceModule, ReactiveFormsModule, SharedModule]
})
export class InserirModule{

}