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

  fullSizeCardImg = input< News | undefined >(undefined);

  ngOnInit() {
    setTimeout(()=> console.log(this.fullSizeCardImg()) ,3000)
  }

}
