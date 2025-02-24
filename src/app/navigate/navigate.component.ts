import { Component, inject, Input, Signal, signal, SimpleChanges } from '@angular/core';
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

  @Input({ required: true }) navSelection!: string;
  @Input()  x = 'test'
  categoryNews =  signal<AllNewsData |undefined>(undefined);


  ngOnChanges(changes: SimpleChanges) {
    if (changes['navSelection']) {
      this.NewsDataService.getNewsByCatigory(this.navSelection).subscribe({
        next: (news) => this.categoryNews.set(news),
      });
    }    
  }

  




}

