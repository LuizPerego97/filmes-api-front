import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filmes } from '../../models/filmes/filmes';
import { Observable } from 'rxjs';

const filmeUrl = 'http://localhost:8080/filmes';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(filmeUrl);
  }

  create(data: Filmes): Observable<string> {
    return this.http.post(filmeUrl, data, { responseType: `text` });
  }

  delete(id: number): Observable<string> {
    return this.http.delete(`${filmeUrl}/${id}`, { responseType: `text` });
  }

  update(id: number, data: Filmes): Observable<String> {
    return this.http.put(`${filmeUrl}/${data.id}`, data, {
      responseType: `text`,
    });
  }
}
