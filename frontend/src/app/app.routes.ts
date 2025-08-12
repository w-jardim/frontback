import { Routes } from '@angular/router';
import { ListaJogosComponent } from './components/lista-jogos/lista-jogos.component';
import { NovoJogoComponent } from './components/novo-jogo/novo-jogo.component';
import { EditarJogoComponent } from './components/editar-jogo/editar-jogo.component';

export const routes: Routes = [
	{ path: '', component: ListaJogosComponent },
	{ path: 'novo', component: NovoJogoComponent },
	{ path: 'editar/:id', component: EditarJogoComponent },
	{ path: '**', redirectTo: '' }
];
