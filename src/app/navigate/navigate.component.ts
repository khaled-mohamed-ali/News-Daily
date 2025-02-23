import { Component, inject, signal } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { AllNewsComponent } from '../all-news/all-news/all-news.component';
import { AllNewsData } from '../interface/news-data';
import { toSignal } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})

export class NavigateComponent {
  private NewsDataService = inject(NewsDataService)

  category: string = 'business';
  // catigoryNews = toSignal(this.NewsDataService.getNewsByCatigory(this.category), {<initialValue: 'string'});
  categoryNews = toSignal(this.NewsDataService.getNewsByCatigory(this.category));


  ngOnInit() {
    // this.NewsDataService.getNewsByCatigory(this.category).subscribe({
    //   next: (News) => this.catigoryNews.set(News)
    // })
    this.NewsDataService.getNewsByCatigory(this.category)

    setTimeout(() => console.log(this.categoryNews()?.['sources'].id),3000)
  }


}

