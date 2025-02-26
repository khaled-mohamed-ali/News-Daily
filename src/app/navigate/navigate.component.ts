import { Component, inject, Input, Signal, signal, SimpleChanges } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { AllNewsData } from '../interface/news-data';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MidSizeCardComponent } from "../all-news/mid-size-card-img/mid-size-card.component";
import { PostInfoComponent } from "../all-news/post-info/post-info.component";


@Component({
  selector: 'app-navigate',
  standalone: true,
  imports: [MidSizeCardComponent, PostInfoComponent],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css'
})

export class NavigateComponent {

  @Input({ required: true }) navSelection!: string;
  @Input() x = 'test'


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
  const category = route.paramMap.get('navSelection')!;
  
  return newsDataService.getNewsByCatigory(category)
}


