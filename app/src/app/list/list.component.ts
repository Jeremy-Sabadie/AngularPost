import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
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
    this.apiService.getData().subscribe({
      next: (response) => {
        if (response && response.entries) {
          this.data = response.entries;
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données', error);
      },
    });
  }
}
