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
  currentPageNumber = signal<number>(1);
  @Input() navSelection!: string;
  pagesNumber = computed(() => (Math.floor(this.NewsDataService.categoryNews()?.['totalResults'] / 20)))
  pagination = signal<number>(1);


  constructor() {
    effect(() => {
      console.log(this.pageNumbers, 'in effec')
    });
  }

  get pageNumbers() {
    return Array.from({ length: this.pagesNumber() }, (_, i) => i).slice(this.pagination(), this.pagination() + 4);
  }


  nextPage() {
    this.currentPageNumber.update(prev => prev + 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection, this.currentPageNumber());
    this.router.navigate(['/', this.navSelection, this.currentPageNumber()]);
    this.pagination() + 4 - this.currentPageNumber() == 1 ? this.pagination.update(prev => prev + 1) : ''
  }



  prevPage() {
    this.currentPageNumber.update(prev => prev - 1);
    this.NewsDataService.getNewsByCatigory(this.navSelection, this.currentPageNumber());
    this.router.navigate(['/', this.navSelection, this.currentPageNumber()]);
    this.pagination() - this.currentPageNumber() == 1 ? this.pagination.update(prev => prev - 1) : ''

  }

  numberedPage(pageN: number) {
    this.currentPageNumber.set(pageN);
    this.NewsDataService.getNewsByCatigory(this.navSelection, this.currentPageNumber());

    const paginationValue = this.pagination();
    const currentPage = this.currentPageNumber();
    console.log(paginationValue,currentPage)
    
    if (paginationValue + 4 - currentPage === 1) {
      this.pagination.update(prev => prev + 1);
    } else if (paginationValue - currentPage === 0) {
      this.pagination.update(prev => prev - 1);
    }
    
    else {
      this.pagination.set(1)
    }
    this.router.navigate(['/', this.navSelection, this.currentPageNumber()]);
  }

  ngOnInit() {
    console.log(this.pageNumbers, 'in ng')
  }

  ngOnChanges(changes: SimpleChange) {
    if (changes) {
      this.currentPageNumber.set(1)
    }
  }


}
