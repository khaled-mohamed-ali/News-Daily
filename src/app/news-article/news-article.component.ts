import { Component, inject, signal } from '@angular/core';
import { PostInfoComponent } from "../all-news/post-info/post-info.component";
import { MidSizeCardComponent } from '../all-news/mid-size-card-img/mid-size-card.component';
import { NewsDataService } from '../news-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../interface/news-data';

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [MidSizeCardComponent, PostInfoComponent],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.css'
})
export class NewsArticleComponent {
  private newsDataService = inject(NewsDataService);
  private route = inject(Router)
  article = signal<News | undefined>(undefined)

  // getNewsArticle() {
    // const newsArticle = this.newsDataService.getNewsArticle(news)
     
  // }
  ngOnInit() {
    this.article.set(history.state?.article);
    console.log(this.article()?.author,'art')
  }

}
