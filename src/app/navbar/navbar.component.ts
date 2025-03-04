import { Component, inject, Input, signal, ViewEncapsulation } from '@angular/core';
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
  private NewsDataService = inject(NewsDataService);
  @Input() navSelection!: string;
  @Input() pageNumber: number = 1;

  
  
 ngOnInit() {
 }


}
