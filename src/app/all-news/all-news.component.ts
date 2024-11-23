import { Component, computed, inject, signal } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { AllNewsData, News } from '../interface/news-data';
import { TodayNewsComponent } from "./today-news/today-news.component";

@Component({
  selector: 'app-all-news',
  standalone: true,
  imports: [TodayNewsComponent],
  templateUrl: './all-news.component.html',
  styleUrl: './all-news.component.css'
})
export class AllNewsComponent {

  private NewsDataService = inject(NewsDataService)
  News = signal<AllNewsData | undefined>(undefined);
  todayNews = computed(() => this.News()?.articles.filter((item => item.publishedAt.includes('2024-11-07'))));

  RandomDayArticle = computed(() => {
    const dayNews = this.todayNews();
    const validArticles = dayNews?.filter(article => 
      article.urlToImage  &&
      // article.urlToImage !== undefined &&
      article.author != null &&
      article.title != null 
     );

    const random = Math.floor(Math.random() * dayNews!?.length)

    return validArticles?.[random]
  })
   
  ngOnInit() {
    this.NewsDataService.getNews().subscribe({
      next: (news: AllNewsData) => {
        this.News.set(news);
      }
    }
    )

    setTimeout(() => {
      console.log(this.RandomDayArticle()?.urlToImage , 'imgurl',)
      ,
        console.log(this.todayNews(),'todayNews')
    }
      ,1000)

  }


}

