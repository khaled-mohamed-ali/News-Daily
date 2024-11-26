import { Component, importProvidersFrom, input, signal } from '@angular/core';
import { News } from '../../interface/news-data';


@Component({
  selector: 'app-post-info',
  standalone: true,
  templateUrl: './post-info.component.html',
  styleUrl: './post-info.component.css'
})
export class PostInfoComponent {
  publishedAt = input.required<News>();

 ngOnInit() {
   setTimeout(() => console.log(this.publishedAt(),'publish'),3000)
 }

}
