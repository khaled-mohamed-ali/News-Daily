import { Component, inject, signal } from '@angular/core';
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
  private NewsData = inject(NewsDataService)
  // newsData = signal<NewsData | undefined>(undefined) 

  ngOnInit() {
    this.NewsData.getNews();
  }

}
