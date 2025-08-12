import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para o modelo de Jogo
export interface Jogo {
	id?: number;
	nome: string;
	tipo: string;
	ano: number;
}

@Injectable({ providedIn: 'root' })
export class JogoService {
	private api = 'http://localhost:3000/api/games';

	constructor(private http: HttpClient) {}

	// Buscar todos os jogos
	listar(): Observable<Jogo[]> {
		return this.http.get<Jogo[]>(this.api);
	}
	// Buscar jogo por ID
	buscarPorId(id: number): Observable<Jogo> {
		return this.http.get<Jogo>(`${this.api}/${id}`);
	}
	// Criar novo jogo
	criar(jogo: Jogo): Observable<Jogo> {
		return this.http.post<Jogo>(this.api, jogo);
	}
	// Atualizar jogo existente
	atualizar(id: number, jogo: Jogo): Observable<Jogo> {
		return this.http.put<Jogo>(`${this.api}/${id}`, jogo);
	}
	// Remover jogo
	remover(id: number): Observable<void> {
		return this.http.delete<void>(`${this.api}/${id}`);
	}
}
