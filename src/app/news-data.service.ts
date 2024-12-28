import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { AllNewsData } from './interface/news-data';
import { BrowserModule } from '@angular/platform-browser';
import { map, filter } from 'rxjs/operators';
import { of, pipe } from 'rxjs'


@Injectable({
  providedIn: 'root',
})

export class NewsDataService {

  constructor() { }

  private httpClient = inject(HttpClient);
  country = "";
  apiKey: string = "";

  getNews() {
    const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d20e510c9ed54f6eaf96079fedec6bd2";
    // const newsUrl = "";
    const params = new HttpParams()
      .set('page', '1')       // Specify the page number (as a string)
      .set('pageSize', '100')
    return (
      this.httpClient.get<AllNewsData>(newsUrl, { params })
    )
  }

  getAgenciesNews () {
    const newsAgencyes = ["al-jazeera-english","ars-technica","associated-press","axios","business-insider","bloomberg","breitbart-news"]
    const randomAgency = Math.floor(Math.random()* newsAgencyes.length - 1)
    // const allSourceUrl = '';
    const allSourceUrl = "https://newsapi.org/v2/top-headlines?sources="+ newsAgencyes[randomAgency]+ "&apiKey=d20e510c9ed54f6eaf96079fedec6bd2";
    const params = new HttpParams()
      .set('page', '1')       // Specify the page number (as a string)
      .set('pageSize', '100')
    return (
      this.httpClient.get<AllNewsData>(allSourceUrl, { params})
    )

  }





}




