import { Component, input } from '@angular/core';
import { News } from '../../interface/news-data';

@Component({
  selector: 'app-full-size-card',
  standalone: true,
  imports: [],
  templateUrl: './full-size-card.component.html',
  styleUrl: './full-size-card.component.css'
})
export class FullSizeCardComponent {

  fullSizeCardData = input< News | undefined >(undefined);

  

}
