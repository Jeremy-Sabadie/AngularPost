import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let item of data">{{ item.API }}</li>
    </ul>
  `,
})
export class ListComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response) => {
        if (response && response.entries) {
          this.data = response.entries; // Alimente la liste avec les données retournées par l'API
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }
}
