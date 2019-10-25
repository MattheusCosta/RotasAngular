import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { QuemSomosComponent } from './componentes/quem-somos/quem-somos.component';
import { ContatoComponent } from './componentes/contato/contato.component';



@NgModule({
  declarations: [InicialComponent, QuemSomosComponent, ContatoComponent],
  imports: [
    CommonModule
  ]
})
export class PaginasModule { }
