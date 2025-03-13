import { Component, inject, Input, input } from '@angular/core';
import { SmallNewsCardComponent } from "../small-news-card/small-news-card.component";
import { MidSizeCardComponent } from "../mid-size-card-img/mid-size-card.component";
import { News } from '../../interface/news-data';
import { PostInfoComponent } from "../post-info/post-info.component";
import { FullSizeCardComponent } from "../full-size-card/full-size-card.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-today-news',
  standalone: true,
  imports: [SmallNewsCardComponent, MidSizeCardComponent, PostInfoComponent, FullSizeCardComponent],
  templateUrl: './today-news.component.html',
  styleUrl: './today-news.component.css'
})


export class TodayNewsComponent {
  private router = inject(Router);
  randomArticle = input<News>();
  @Input() sub4Articels: News[] = [];
  @Input() rightArticle: News | undefined = undefined
  

  getNewsArticle(news:News | undefined) {

    return this.router.navigateByUrl('/newsaritcle', { state: { article: news } });
  }

  ngDoCheck() {
  }





}
