import { Component } from '@angular/core';
import { ktdTrackById } from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cols = 2;
  rowHeight = 200;

  layout = [
    {id: '0', x: 0, y: 0, w: 1, h: 1, text: "This is an item"},
    {id: '1', x: 1, y: 0, w: 1, h: 1, img:"https://via.placeholder.com/150"},
  ];

  trackById = ktdTrackById;
}
