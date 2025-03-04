import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts'; // Remplace par l'URL de ton API

  constructor(private http: HttpClient) {}

  /**
   * Effectue un appel GET pour récupérer la liste des données
   * @returns Observable<any> : Liste des données retournées par l'API
   */
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
