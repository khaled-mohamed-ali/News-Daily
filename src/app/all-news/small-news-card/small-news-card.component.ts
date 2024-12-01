import { Component, input } from '@angular/core';
import { News } from '../../interface/news-data';

@Component({
  selector: 'app-small-news-card',
  standalone: true,
  imports: [],
  templateUrl: './small-news-card.component.html',
  styleUrl: './small-news-card.component.css'
})
export class SmallNewsCardComponent {

  news = input<News>()

}
