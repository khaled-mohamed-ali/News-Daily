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



  nextPage() {
    this.pagenumber.update(prev => prev + 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection,this.pagenumber());
    this.router.navigate(['/', this.navSelection,this.pagenumber() ]);
  }



  prevPage() {
    // if (this.pagenumber >= 2) {
    this.pagenumber.update(prev => prev- 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection,this.pagenumber());
    this.router.navigate(this.pagenumber() >= 1 ? ['/', this.navSelection, this.pagenumber() ] : ['../', this.navSelection]);

    // }
  }

ngOnChanges(changes: SimpleChange) {
  if(changes) {
    this.pagenumber.set(0)
  }
}




}
