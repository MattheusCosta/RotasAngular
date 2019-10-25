import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './components/inicial/inicial.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';
import { ContatoComponent } from './components/contato/contato.component';



@NgModule({
  declarations: [InicialComponent, QuemSomosComponent, ContatoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InicialComponent,
    ContatoComponent,
    QuemSomosComponent
  ],
  providers: [
    InicialComponent,
    ContatoComponent,
    QuemSomosComponent
  ]
})
export class PaginasModule { }
