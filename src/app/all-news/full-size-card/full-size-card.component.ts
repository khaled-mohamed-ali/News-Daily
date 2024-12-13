import { Component, computed, input,ViewEncapsulation } from '@angular/core';
import { News } from '../../interface/news-data';

@Component({
  selector: 'app-full-size-card',
  standalone: true,
  imports: [],
  templateUrl: './full-size-card.component.html',
  styleUrl: './full-size-card.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FullSizeCardComponent {

  fullSizeCardData = input< News | undefined >(undefined);
  content = computed(() =>  this.fullSizeCardData()?.content)

 

}
