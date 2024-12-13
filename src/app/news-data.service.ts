import { HttpClient, HttpParams } from '@angular/common/http';
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
    const params = new HttpParams()
    .set('page', '1')       // Specify the page number (as a string)
    .set('pageSize', '10')
    return (
      this.httpClient.get<AllNewsData>(this.url + this.apiKey,{params})
     )
    
  }


 
  // https://newsapi.org/v2/top-headlines?category=general&apiKey=apiKey=d20e510c9ed54f6eaf96079fedec6bd2


}




