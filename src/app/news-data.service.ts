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
  url = "https://newsapi.org/v2/top-headlines?country=us&";
  apiKey: string = "apiKey=d20e510c9ed54f6eaf96079fedec6bd2";
  todayNewsLength: number| undefined = 0;
  value = 0

  getNews() {
    return (
      this.httpClient.get<AllNewsData>(this.url + this.apiKey)
     )
    
  }


 
  // https://newsapi.org/v2/top-headlines?category=general&apiKey=apiKey=d20e510c9ed54f6eaf96079fedec6bd2


}




