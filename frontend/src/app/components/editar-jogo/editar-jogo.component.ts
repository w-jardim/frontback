import { Component, OnInit } from '@angular/core';
import { JogoService, Jogo } from '../../services/game.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-jogo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-jogo.component.html',
  styleUrls: ['./editar-jogo.component.css']
})
export class EditarJogoComponent implements OnInit {
  jogo: Jogo | undefined;
  constructor(
    private jogoService: JogoService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jogoService.buscarPorId(id).subscribe(jogo => this.jogo = jogo);
  }

  salvar() {
    if (this.jogo && this.jogo.id) {
      this.jogoService.atualizar(this.jogo.id, this.jogo).subscribe(() => this.router.navigate(['/']));
    }
  }
}
