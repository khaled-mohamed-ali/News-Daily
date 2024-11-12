import { Component, computed, inject, signal } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { allNewsData, News } from '../interface/news-data';

@Component({
  selector: 'app-all-news',
  standalone: true,
  imports: [],
  templateUrl: './all-news.component.html',
  styleUrl: './all-news.component.css'
})
export class AllNewsComponent {

  private NewsDataService = inject(NewsDataService)
  News = signal<allNewsData | undefined>(undefined);
  TodayNews = signal<News[] | undefined>(undefined);
  randomTodayNews: News | undefined  ;  



  ngOnInit() {
    this.NewsDataService.getNews().subscribe({
      next: (news: allNewsData) => {
        this.News.set(news);
        this.getTodayNews();
        this.getRandomDayNews()
      }   
      }
    )}
  

  getTodayNews() {
    const todayNews = computed(() => this.News()?.articles.filter((item => item.publishedAt.includes('2024-11-06'))));
    this.TodayNews.set(todayNews());
  }

  getRandomDayNews() {
    const newsItem = this.TodayNews();
    const randomIndex = Math.floor(Math.random() * newsItem!?.length);
    console.log(randomIndex,'random index');
    newsItem?.[randomIndex].author === null || undefined ? this.getRandomDayNews() : this.randomTodayNews = newsItem?.[randomIndex];
  }
}

