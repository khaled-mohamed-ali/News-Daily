import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  @Input() pageNumber: number = 1;

  currentPage = Number(this.NewsDataService.currentPage);
  @Input() navSelection!: string;

  
  
  nextPage() {
    this.pageNumber ++ ;
    return this.NewsDataService.getNewsByCatigory(this.navSelection, this.pageNumber)


  }


  ngOnInit() {
    console.log(this.pageNumber, 'pageNumber')

  }

}
