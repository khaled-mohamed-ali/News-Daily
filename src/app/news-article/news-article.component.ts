import { Component, inject } from '@angular/core';
import { PostInfoComponent } from "../all-news/post-info/post-info.component";
import { MidSizeCardComponent } from '../all-news/mid-size-card-img/mid-size-card.component';
import { NewsDataService } from '../news-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-article',
  standalone: true,
  imports: [MidSizeCardComponent, PostInfoComponent],
  templateUrl: './news-article.component.html',
  styleUrl: './news-article.component.css'
})
export class NewsArticleComponent {
  private newsDataService = inject(NewsDataService);
  private router = inject(Router)

  // getNewsArticle() {
    // const newsArticle = this.newsDataService.getNewsArticle(news)
     
  // }
  ngOnInit() {
    console.log(this.router.getCurrentNavigation()?.extras.state?.['news'],'this.router.getCurrentNavigation()')
  }

}
