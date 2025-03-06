import { Component, inject, Input, signal } from '@angular/core';
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
  pagenumber =0 ;
  @Input() navSelection!: string;



  nextPage() {
    this.pagenumber ++
  }



  prevPage() {
    // if (this.pagenumber >= 2) {
      this.pagenumber --;
    // }
  }

  ngDoCheck() {
    console.log(this.pagenumber,'pagen')
    }




}
