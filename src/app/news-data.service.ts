import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { NewsData } from './interface/news-data';
import { BrowserModule } from '@angular/platform-browser';
import { map, filter } from 'rxjs/operators';
import {of, pipe} from 'rxjs'


@Injectable({
  providedIn: 'root',
})

export class NewsDataService {

  constructor() { }

  private httpClient = inject(HttpClient);
  News = signal<NewsData | undefined>(undefined);
  todayNews = this.getTodayNews();
  url = "https://newsapi.org/v2/everything?q=apple&from=2024-11-04&to=2024-11-08&sortBy=popularity&";
  apiKey: string = "apiKey=d20e510c9ed54f6eaf96079fedec6bd2";
  todayNewsLength: number| undefined = 0;
  

  getNews() {
    return (
      this.httpClient.get<NewsData>( this.url + this.apiKey)
        .subscribe({
          next: (news: NewsData) => this.News.set(news)
        })
    )
  }

  getTodayNews() {
    const todayNews = computed(() => this.News()?.articles.filter((item => item.publishedAt.includes('2024-11-06'))));
    return todayNews
  }

  getRandomDayNews() {
    const value = this.todayNews;
    const randomIndex = Math.floor(Math.random() * value()!?.length);
    return this.todayNews()?.[randomIndex]
  }


 


}




