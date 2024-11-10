import { Component, effect, inject, signal } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { NewsData } from '../interface/news-data';

@Component({
  selector: 'app-all-news',
  standalone: true,
  imports: [],
  templateUrl: './all-news.component.html',
  styleUrl: './all-news.component.css'
})
export class AllNewsComponent {
  private NewsDataService = inject(NewsDataService)
  randomNews = this.NewsDataService.getRandomDayNews()
  


  ngOnInit() {
    this.NewsDataService.getNews();
    this.NewsDataService.getTodayNews();
    this.NewsDataService.getRandomDayNews()

    
  
    setTimeout(() => console.log(this.randomNews?.title), 4000)

  }




}
