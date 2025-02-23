import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { NewsDataService } from '../news-data.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MdbCollapseModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
   NewsDataService = inject(NewsDataService)

  set path(ar: string) {
     this.NewsDataService.getNewsByCatigory(ar);
     console.log(ar);
  }
  

}
