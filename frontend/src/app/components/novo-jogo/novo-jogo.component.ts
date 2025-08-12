import { Component } from '@angular/core';
import { JogoService, Jogo } from '../../services/game.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-jogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './novo-jogo.component.html',
  styleUrls: ['./novo-jogo.component.css']
})
export class NovoJogoComponent {
  jogo: Jogo = { nome: '', tipo: '', ano: new Date().getFullYear() };
  constructor(private jogoService: JogoService, public router: Router) {}

  salvar() {
    this.jogoService.criar(this.jogo).subscribe(() => this.router.navigate(['/']));
  }
}
