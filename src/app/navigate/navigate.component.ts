import { Component, inject, input, Input, Signal, signal, SimpleChanges } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { AllNewsData } from '../interface/news-data';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MidSizeCardComponent } from "../all-news/mid-size-card-img/mid-size-card.component";
import { PostInfoComponent } from "../all-news/post-info/post-info.component";
import { PaginationComponent } from "../pagination/pagination.component";


@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [MidSizeCardComponent, PostInfoComponent, PaginationComponent],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})

export class NavigateComponent {

  @Input({ required: true }) navSelection!: string;
  // @input({ required: true }) pageNumber: number = 1;
  pageNumber = input()

  private newsDataService = inject(NewsDataService);
  private route = inject(ActivatedRoute);
  private activatedRoute = inject(ActivatedRoute);
  categoryNews = signal<AllNewsData | undefined>(undefined);




  ngOnInit() {
    this.activatedRoute.data.subscribe({
      next: (news) => 
        this.categoryNews.set(news['data'])     
    })

  }








}




export const newsResolver = (  route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  const newsDataService = inject(NewsDataService);
  const activatedRoute = inject(ActivatedRoute)
  const category = activatedRoute.snapshot.children[0]?.params['navSelection'];
  const pageNumber: any = route.paramMap.get('pageNumber');
  return newsDataService.getNewsByCatigory(category, pageNumber)
}
