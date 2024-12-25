import { Component, input, signal } from '@angular/core';
import { News } from '../interface/news-data';
import { PostInfoComponent } from "../all-news/post-info/post-info.component";

@Component({
  selector: 'app-micro-card',
  standalone: true,
  imports: [PostInfoComponent],
  templateUrl: './micro-card.component.html',
  styleUrl: './micro-card.component.css'
})
export class MicroCardComponent {
  item = input<News | undefined>(undefined)

  ngOnInit() {
 
  }

}
