import { Component, importProvidersFrom, input, signal } from '@angular/core';
import { News, UserInfo } from '../../interface/news-data';


@Component({
  selector: 'app-post-info',
  standalone: true,
  templateUrl: './post-info.component.html',
  styleUrl: './post-info.component.css'
})
export class PostInfoComponent {

  userInfo = input<UserInfo >();



}
