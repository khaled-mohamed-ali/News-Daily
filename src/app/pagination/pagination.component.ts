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
  @Input() navSelection!: string;



  nextPage() {
    this.pageNumber++;
  }

  prevPage() {
    if (this.pageNumber >= 2) {
      this.pageNumber--;
    }
  }




}
