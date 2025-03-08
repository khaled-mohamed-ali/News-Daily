import { Component, computed, effect, inject, Input, signal, SimpleChange } from '@angular/core';
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
  pagesNumber = computed(() => (Math.floor(this.NewsDataService.categoryNews()?.['totalResults'] / 20)))

  constructor() {
    effect(() => {
      console.log(this.pagesNumber(),'in effec')
    });
  }

  get pageNumbers() {
    return Array.from({ length: this.pagesNumber()}, (i:number) => i++);
  }


  nextPage() {
    this.pagenumber.update(prev => prev + 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection,this.pagenumber());
    this.router.navigate(['/', this.navSelection,this.pagenumber()]);
  }



  prevPage() {
    this.pagenumber.update(prev => prev- 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection,this.pagenumber());
    this.router.navigate( ['/', this.navSelection, this.pagenumber()]);

  }

  numberedPage(pageN: number) {
    this.pagenumber.set(pageN);
    this.NewsDataService.getNewsByCatigory(this.navSelection, this.pagenumber());
    this.router.navigate(['/', this.navSelection, this.pagenumber()]);
  }

  ngOnInit() {
    console.log(this.pageNumbers, 'in ng')
  }

ngOnChanges(changes: SimpleChange) {
  if(changes) {
    this.pagenumber.set(1)
  }
}


}
