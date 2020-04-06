import { Input, Component } from "@angular/core";

@Component({
    selector: 'app-alert-success',
    templateUrl: './alert.success.component.html'
})
export class AlertSuccess {

    @Input() mensagem: string = '';
}