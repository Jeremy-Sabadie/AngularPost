import { Component } from '@angular/core';
import { ListComponent } from './list/list.component'; // Assure-toi du chemin correct
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html', // Template externe
  imports: [ListComponent, RouterModule], // Fusion des imports
})
export class AppComponent {
  title = 'app';
}
