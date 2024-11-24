import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { AllNewsData } from './interface/news-data';
import { BrowserModule } from '@angular/platform-browser';
import { map, filter } from 'rxjs/operators';
import {of, pipe} from 'rxjs'


@Injectable({
  providedIn: 'root',
})

export class NewsDataService {

  constructor() { }

  private httpClient = inject(HttpClient);
  url = "https://newsapi.org/v2/everything?q=apple&from=2024-11-04&to=2024-11-08&sortBy=popularity&";
  apiKey: string = "apiKey=d20e510c9ed54f6eaf96079fedec6bd2";
  todayNewsLength: number| undefined = 0;
  
  // article => article.urlToImage != null)

  getNews() {
    return (
      this.httpClient.get<AllNewsData>(this.url + this.apiKey)
     )
    
  }


 


 


}




