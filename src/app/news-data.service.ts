import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
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
  url = "https://newsapi.org/v2/everything?q=apple&from=2024-11-04&to=2024-11-04&sortBy=popularity&";
  apiKey: string = "apiKey=d20e510c9ed54f6eaf96079fedec6bd2";

  

  getNews() {
    return (
      this.httpClient.get<NewsData>( this.url + this.apiKey)
        .subscribe({
          next: (news: NewsData) => this.News.set(news)// Updates state with the fetched news
          
        })
    )
  }

  getTodayNews() {
     return  of(this.News()?.articles).pipe(
      map(articles => articles?.filter(item => item.publishedAt.includes('2024-11-07')) )
     ).subscribe({
      next: (x) =>  console.log(x)
     })

  }


 


}




