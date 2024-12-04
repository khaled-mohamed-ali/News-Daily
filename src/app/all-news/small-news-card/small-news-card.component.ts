import { Component, input } from '@angular/core';
import { News } from '../../interface/news-data';
import { PostInfoComponent } from "../post-info/post-info.component";

@Component({
  selector: 'app-small-news-card',
  standalone: true,
  imports: [PostInfoComponent],
  templateUrl: './small-news-card.component.html',
  styleUrl: './small-news-card.component.css'
})
export class SmallNewsCardComponent {

  news = input<News>()

}
