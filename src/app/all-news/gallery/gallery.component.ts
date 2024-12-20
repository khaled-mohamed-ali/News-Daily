import { Component, input } from '@angular/core';
import { News } from '../../interface/news-data';
import { MidSizeCardComponent } from "../mid-size-card-img/mid-size-card.component";
import { SmallNewsCardComponent } from "../small-news-card/small-news-card.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [MidSizeCardComponent, SmallNewsCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GALLERYComponent {

    generalNews = input<News[] | undefined>()
  

}
