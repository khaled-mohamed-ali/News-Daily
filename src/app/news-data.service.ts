import { HttpClient, HttpParams } from '@angular/common/http';
import { computed, inject, Injectable, Input, signal } from '@angular/core';
import { AllNewsData } from './interface/news-data';



@Injectable({
  providedIn: 'root',
})

export class NewsDataService {


  constructor() { }

  private httpClient = inject(HttpClient);
  country = "";
  apiKey: string = "36a3b4929706474ca045250a1a2848d0";
  currentPage: string | null = '';
  @Input() pageNumber:number = 1; 
  categoryNews = signal<AllNewsData| undefined>(undefined)



  // 36a3b4929706474ca045250a1a2848d0 maxbattot
  // d20e510c9ed54f6eaf96079fedec6bd2 dev.khaled

  getNews() {
    const newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + this.apiKey;
    // const newsUrl = "";
    const params = new HttpParams()
      .set('page', '1')       // Specify the page number (as a string)
      .set('pageSize', '100')
    return (
      this.httpClient.get<AllNewsData>(newsUrl, { params })
    )
  }

  getAgenciesNews() {
    const newsAgencyes = ["al-jazeera-english", "ars-technica", "associated-press", "axios", "business-insider", "bloomberg", "breitbart-news"]
    const randomAgency = Math.floor(Math.random() * newsAgencyes.length - 1)
    const allSourceUrl = "https://newsapi.org/v2/top-headlines?sources=" + newsAgencyes[randomAgency] + "&apiKey=" + this.apiKey;
    const params = new HttpParams()
      .set('page', '1')       // Specify the page number (as a string)
      .set('pageSize', '100');
    return (
      this.httpClient.get<AllNewsData>(allSourceUrl, { params })
    )

  }

  getNewsByCatigory(category: string, pageNumber:number) {
    let ByCatigory = 'https://newsapi.org/v2/everything?q=' + category + '&apiKey=' + this.apiKey;
    const params = new HttpParams()
      .set('page', pageNumber)       // Specify the page number (as a string)
      .set('pageSize', '20')
    this.currentPage = params.get('page')
    const data = this.httpClient.get<AllNewsData>(ByCatigory, { params });

    console.log('wo')

    return (

      data.subscribe({
        next: (news) => this.categoryNews.set(news),
      })
    )
  }
  


}




