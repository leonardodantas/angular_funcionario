import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { InserirFuncionariosComponent } from "./funcionarios/inserir-funcionarios/inserir-funcionarios.component";
import { ListarFuncionariosComponent } from "./funcionarios/listar-funcionarios/listar-funcionarios.component";
import { HomeComponent } from "./home/home.component";
import { FuncionarioResolver } from "./funcionarios/listar-funcionarios/funcionario.resolver";
import { ErrorsComponent } from "./errors/errors.component";
import { FuncaoResolver } from "./funcionarios/inserir-funcionarios/funcao.resolver";
import { ListarFuncoesComponent } from "./funcionarios/listar-funcoes/listar-funcoes.component";
import { InserirFuncoesComponent } from "./funcionarios/inserir-funcoes/inserir-funcoes.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'funcionario/inserir', component: InserirFuncionariosComponent , resolve:{
        funcoes: FuncaoResolver
    }},
    {path: 'funcionario/listar', component: ListarFuncionariosComponent, resolve: {
        funcionarios: FuncionarioResolver
    }},
    {path: 'funcao/listar', component: ListarFuncoesComponent, resolve: {
        funcoes: FuncaoResolver
    }},
    {path: 'funcao/inserir', component: InserirFuncoesComponent},
    {path:"**", component: ErrorsComponent}

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}