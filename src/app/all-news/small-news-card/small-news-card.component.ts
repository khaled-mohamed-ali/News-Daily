import { Component, inject, input } from '@angular/core';
import { AllNewsData, News } from '../../interface/news-data';
import { PostInfoComponent } from "../post-info/post-info.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-news-card',
  standalone: true,
  imports: [PostInfoComponent],
  templateUrl: './small-news-card.component.html',
  styleUrl: './small-news-card.component.css'
})
export class SmallNewsCardComponent {
  private router = inject(Router)

  news = input<News>()
  getNewsArticle(news: News | undefined) {
    return this.router.navigateByUrl('/newsaritcle', { state: { article: news } });
  }
}
