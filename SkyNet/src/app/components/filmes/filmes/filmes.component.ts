import { Component, OnInit } from '@angular/core';
import { Filmes } from '../../../models/filmes/filmes';
import { FilmesService } from '../../../services/filmes/filmes.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.scss',
})
export class FilmesComponent implements OnInit {
  filmes?: Filmes[];
  filmeSelecionado: Filmes = {};
  filmeSelecionadoExclusao: Filmes = {};
  formularioAdicao = false;
  filme: Filmes = {};
  mensagem: string = '';

  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.receberFilmes();
  }

  receberFilmes(): void {
    this.filmesService.getAll().subscribe({
      next: (data) => {
        this.filmes = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  selecionarFilme(filme: Filmes) {
    this.filmeSelecionado = filme;
  }

  selecionarParaExcluir(filme: Filmes) {
    this.filmeSelecionadoExclusao = filme;
  }

  excluirFilme(id: number) {
    this.filmesService.delete(id).subscribe({
      next: (data) => {
        this.mensagem = data;
        console.log(data);
        this.receberFilmes();
      },
      error: (e) => console.error(e),
    });
  }
}
