import { NgModule } from "@angular/core";
import { MenuNavbarComponent } from "./menu-navbar.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations:[
        MenuNavbarComponent
    ],
    exports: [MenuNavbarComponent]
})
export class MenuNavbarModule{}