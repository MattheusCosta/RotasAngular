import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesInicial, RoutesContato, RoutesQuemSomos } from './paginas/paginas-routing.module';


 export const rotas = [
  { 
    path: 'index', 
    pathMatch: 'full', 
    redirectTo: 'inicio' 
  },
  ...RoutesInicial,
  ...RoutesContato,
  ...RoutesQuemSomos
]

@NgModule({
  imports: [
    RouterModule.forRoot(rotas)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
