import { Component, input } from '@angular/core';
import { SmallNewsCardComponent } from "../small-news-card/small-news-card.component";
import { AllNewsData, News } from '../../interface/news-data';
import { MidSizeCardComponent } from "../mid-size-card-img/mid-size-card.component";
import { PostInfoComponent } from "../post-info/post-info.component";
import { FullSizeCardComponent } from "../full-size-card/full-size-card.component";

@Component({
  selector: 'app-editors-pick',
  standalone: true,
  imports: [SmallNewsCardComponent, MidSizeCardComponent, PostInfoComponent, FullSizeCardComponent],
  templateUrl: './editors-pick.component.html',
  styleUrl: './editors-pick.component.css'
})
export class EditorsPickComponent {

  generalNews = input<News[] | undefined>()
  ngOnInit() {
    setTimeout(() => console.log(this.generalNews()?.[0]), 2000)
  }

}
