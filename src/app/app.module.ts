import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { FuncionarioModule } from './funcionarios/funcionario.module';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncionarioModule,
    HomeModule,
    ErrorsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
