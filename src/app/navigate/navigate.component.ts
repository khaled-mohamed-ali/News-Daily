import { Component, inject, Input, Signal, signal } from '@angular/core';
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
  categoryNews =  signal<AllNewsData |undefined>(undefined);



  // ngOnInit() {

  //   this.NewsDataService.getNewsByCatigory(this.navSelection).subscribe({
  //     next: (news)=> this.categoryNews.set(news),

  //   });

  // }

  ngOnChanges() {
    this.NewsDataService.getNewsByCatigory(this.navSelection).subscribe({
      next: (news) => this.categoryNews.set(news),

    });    
  }

  




}

