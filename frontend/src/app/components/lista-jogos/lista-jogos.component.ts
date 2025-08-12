import { Component, OnInit } from '@angular/core';
import { JogoService, Jogo } from '../../services/game.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-jogos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {
  jogos: Jogo[] = [];
  constructor(private jogoService: JogoService, private router: Router) {}

  ngOnInit() {
    this.carregarJogos();
  }

  carregarJogos() {
    this.jogoService.listar().subscribe(jogos => this.jogos = jogos);
  }

  editarJogo(id?: number) {
    if (id) this.router.navigate(['/editar', id]);
  }

  excluirJogo(id?: number) {
    if (id && confirm('Deseja excluir este jogo?')) {
      this.jogoService.remover(id).subscribe(() => this.carregarJogos());
    }
  }

  novoJogo() {
    this.router.navigate(['/novo']);
  }

  // Função para melhorar performance do *ngFor
  trackByJogo(index: number, jogo: Jogo): number {
    return jogo.id || index;
  }
}
