import { Component, inject } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { AllNewsComponent } from '../all-news/all-news/all-news.component';

@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})
export class NavigateComponent {
    private NewsDataService = inject(NewsDataService)
  
  category : string = 'business'
  ngOnInit() {
    this.NewsDataService.getNewsByCatigory(this.category).subscribe({
      // next: (news:AllNewsComponent)=> {
        
      // }
    })
    console.log('rendred')
  }

}

