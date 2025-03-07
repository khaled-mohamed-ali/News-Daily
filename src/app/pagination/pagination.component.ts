import { Component, inject, Input, signal, SimpleChange } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NewsDataService } from '../news-data.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  NewsDataService = inject(NewsDataService);
  router = inject(Router)
  pagenumber = signal(1);
  @Input() navSelection!: string;
  totalResults = this.NewsDataService.categoryNews()?.['totalResults'];




  nextPage() {
    this.pagenumber.update(prev => prev + 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection,this.pagenumber());
    this.router.navigate(['/', this.navSelection,this.pagenumber() ]);
  }



  prevPage() {
    this.pagenumber.update(prev => prev- 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection,this.pagenumber());
    this.router.navigate( ['/', this.navSelection, this.pagenumber() ]);

  }

  numberedPage(pageN: number) {
    this.pagenumber.set(pageN);
    this.NewsDataService.getNewsByCatigory(this.navSelection, this.pagenumber());
    this.router.navigate(['/', this.navSelection, this.pagenumber()]);
  }

ngOnChanges(changes: SimpleChange) {
  if(changes) {
    this.pagenumber.set(1)
  }
}


}
