import { NgModule } from "@angular/core";
import { ValidarComponent } from "./validar-error/validar.component";
import { CommonModule } from "@angular/common";
import { AlertSuccess } from "./alert-success/alert.success.component";
import { AlertError } from "./alert-error/alert.error.component";

@NgModule({
    imports: [],
    declarations: [ValidarComponent, AlertSuccess, AlertError],
    exports: [ValidarComponent, AlertSuccess, AlertError]
})
export class SharedModule{

}