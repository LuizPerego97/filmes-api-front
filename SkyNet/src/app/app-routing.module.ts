import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './components/filmes/filmes/filmes.component';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes/avaliacoes.component';

const routes: Routes = [
  { path: 'filmes', component: FilmesComponent },
  { path: 'avaliacoes', component: AvaliacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
