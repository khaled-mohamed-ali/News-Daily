import { Component, inject, signal } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { AllNewsComponent } from '../all-news/all-news/all-news.component';
import { AllNewsData } from '../interface/news-data';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})

export class NavigateComponent {
  private NewsDataService = inject(NewsDataService)

  catigoryNews = signal<AllNewsData | null>(null);
  category: string = 'business';

  ngOnInit() {
    this.NewsDataService.getNewsByCatigory(this.category).subscribe({
      next: (News) => this.catigoryNews.set(News)
    })
  }

}

