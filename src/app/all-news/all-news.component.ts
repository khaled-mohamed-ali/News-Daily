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

  ngOnInit() {
    this.NewsDataService.getNews().subscribe({
      next: (news: AllNewsData) => {
        this.News.set(news);

      },

      complete: () => this.get4News(),
    }
    )
  }

  defaultNews: AllNewsData = {
    articles: []
  };



  News = signal<AllNewsData>(this.defaultNews);
  todayNews = computed(() => this.News()?.articles.filter((item => item.publishedAt.includes('2024-11-07'))));



  RandomDayArticle = computed(() => {

    const dayNews = this.todayNews();
    const validArticles = dayNews?.filter(article => article.urlToImage);
    const random = Math.floor(Math.random() * validArticles!?.length);

    return validArticles?.[random];

  })

  rightSideArticle: News | undefined = undefined

  get4News(): News[] {
    const dayNews = this.todayNews();
    const validArticles = dayNews?.filter(article => article.urlToImage);
    const random = Math.floor(Math.random() * (validArticles!?.length -5) )
    const items: News[] = [];

    for (let i = random; validArticles.length && i < random + 5; i++) {
      items.push(validArticles[i])
    }

    this.rightSideArticle = items.pop();


    //   const fetchArticles = () => {
    //   const random = Math.floor(Math.random() * validArticles!?.length)

    //   if (items.length >= 5) {
    //     this.rightSideArticle =  items.pop();
    //     return;
    //   }

    //   items.push(validArticles[random]);
    //     fetchArticles();
    // };
    //   fetchArticles();

    return items;
  }






}


