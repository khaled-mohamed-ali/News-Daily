import { Component, computed, inject, input,ViewEncapsulation } from '@angular/core';
import { News } from '../../interface/news-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-size-card',
  standalone: true,
  imports: [],
  templateUrl: './full-size-card.component.html',
  styleUrl: './full-size-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FullSizeCardComponent {

  router = inject(Router)
  fullSizeCardData = input< News | undefined >(undefined);
  content = computed(() =>  this.fullSizeCardData()?.content)

  getNewsArticle(news: News | undefined) {
    return this.router.navigateByUrl('/newsaritcle', { state: { article: news } });
  }

 

}
