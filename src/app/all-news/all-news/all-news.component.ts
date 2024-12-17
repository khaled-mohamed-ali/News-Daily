import { Component, computed, inject, signal } from '@angular/core';
import { NewsDataService } from '../../news-data.service';
import { AllNewsData, News } from '../../interface/news-data';
import { TodayNewsComponent } from "../today-news/today-news.component";
import { FullSizeCardComponent } from "../full-size-card/full-size-card.component";
import { EditorsPickComponent } from "../editors-pick/editors-pick.component";

@Component({
  selector: 'app-all-news',
  standalone: true,
  imports: [TodayNewsComponent, FullSizeCardComponent, EditorsPickComponent],
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
    ),
    this.NewsDataService.getGeneralNews().subscribe({
      next: (generalNews) => {
        this.GeneralNews.set(generalNews.articles)
      },
      complete: () => console.log(this.GeneralNews(),'gen') 
    })
  }




  News = signal<AllNewsData>({ articles: []});
  GeneralNews = signal<News[] | undefined>(undefined);
  todayNews = computed(() => this.News()?.articles);
  // .filter((item => item.publishedAt.includes('2024-11-29'))));



  RandomDayArticle = computed(() => {

    const dayNews = this.todayNews();
    const validArticles = dayNews?.filter(article => article.urlToImage);
    const random = Math.floor(Math.random() * validArticles!?.length);

    return validArticles?.[random];

  })

  rightSideArticle: News | undefined = undefined;
  fullSizeCard : News | undefined = undefined;

  get4News(): News[] {
    const dayNews = this.todayNews();
    const validArticles = dayNews?.filter(article => article.urlToImage);
    const random = Math.floor(Math.random() * (validArticles!?.length -6) )
    const items: News[] = [];

    for (let i = random; validArticles.length && i < random + 6; i++) {
      items.push(validArticles[i])
    }

    this.rightSideArticle = items.pop();
    this.fullSizeCard = items.pop();

    return items;
  }







}


