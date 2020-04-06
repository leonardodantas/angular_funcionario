import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-validar',
    templateUrl: './validar.component.html'
})
export class ValidarComponent {

    @Input() mensagem: string;
}