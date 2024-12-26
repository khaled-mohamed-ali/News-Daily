import { Component, input } from '@angular/core';
import { News } from '../interface/news-data';
import { SmallNewsCardComponent } from "../all-news/small-news-card/small-news-card.component";

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [SmallNewsCardComponent],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {

    News = input<News[] | undefined>()
  

}
