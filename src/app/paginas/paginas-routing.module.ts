import { Routes } from '@angular/router';
import { InicialComponent } from './components/inicial/inicial.component';
import { ContatoComponent } from './components/contato/contato.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos.component';

export const RoutesInicial = [
    { 
        path: 'inicio', 
        component: InicialComponent 
    }
]

export const RoutesContato = [
    { 
        path: 'contato', 
        component: ContatoComponent 
    }
]

export const RoutesQuemSomos = [
    { 
        path: 'quemsomos', 
        component: QuemSomosComponent 
    }
]