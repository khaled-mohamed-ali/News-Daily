import { Component, inject, input } from '@angular/core';
import { SmallNewsCardComponent } from "../small-news-card/small-news-card.component";
import { AllNewsData, News } from '../../interface/news-data';
import { MidSizeCardComponent } from "../mid-size-card-img/mid-size-card.component";
import { PostInfoComponent } from "../post-info/post-info.component";
import { FullSizeCardComponent } from "../full-size-card/full-size-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-editors-pick',
  standalone: true,
  imports: [SmallNewsCardComponent, MidSizeCardComponent, PostInfoComponent, FullSizeCardComponent],
  templateUrl: './editors-pick.component.html',
  styleUrl: './editors-pick.component.css'
})
export class EditorsPickComponent {
  private router = inject(Router)
  generalNews = input<News[] | undefined>()

  getNewsArticle(news: News | undefined) {
    return this.router.navigateByUrl('/newsaritcle', { state: { article: news } });
  }

  ngOnInit() {
  }

}
