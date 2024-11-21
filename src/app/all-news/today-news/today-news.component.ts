import { Component, input } from '@angular/core';
import { SmallNewsCardComponent } from "../small-news-card/small-news-card.component";
import { MidSizeCardComponent } from "../mid-size-card-img/mid-size-card.component";
import { News } from '../../interface/news-data';

@Component({
  selector: 'app-today-news',
  standalone: true,
  imports: [SmallNewsCardComponent, MidSizeCardComponent],
  templateUrl: './today-news.component.html',
  styleUrl: './today-news.component.css'
})


export class TodayNewsComponent {

  randomArticle = input<News>();

 


}
