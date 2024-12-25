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
    {id: '0', x: 0, y: 0, w: 1, h: 1},
    {id: '1', x: 1, y: 0, w: 1, h: 1},
  ];

  content = [
    {id: '0',type: 'text', content: "This is an item"},
    {id: '1', type: 'image', content:"https://via.placeholder.com/150"},
  ]

  get items() {
    const result = [];
    for(let i =0 ;i < this.layout.length; i++) {
      const item = this.layout[i];
      const content: {id: string, type:string, content: string} | undefined = this.content.find(c => c.id === item.id);
      if(!content) continue;
      result.push({...item, type: content.type, content: content.content})
    }
    return result;
  }

  trackById = ktdTrackById;

  onLayoutChange(layout: any) {
    console.log(layout);
  }
}
