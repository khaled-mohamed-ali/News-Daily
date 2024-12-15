import { Component, input } from '@angular/core';
import { SmallNewsCardComponent } from "../small-news-card/small-news-card.component";
import { AllNewsData } from '../../interface/news-data';

@Component({
  selector: 'app-editors-pick',
  standalone: true,
  imports: [SmallNewsCardComponent],
  templateUrl: './editors-pick.component.html',
  styleUrl: './editors-pick.component.css'
})
export class EditorsPickComponent {

  generalNews = input<AllNewsData>()
  ngOnInit() {
    setTimeout(() => console.log(this.generalNews()), 2000)
  }

}
