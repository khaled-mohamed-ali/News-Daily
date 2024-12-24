import { Component, input, signal } from '@angular/core';
import { News } from '../interface/news-data';

@Component({
  selector: 'app-micro-card',
  standalone: true,
  imports: [],
  templateUrl: './micro-card.component.html',
  styleUrl: './micro-card.component.css'
})
export class MicroCardComponent {
  item = input<News | undefined>(undefined)

  ngOnInit() {
    setTimeout(()=>     console.log(this.item(),'item')
    ,3000)
  }

}
