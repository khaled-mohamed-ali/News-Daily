import { Component, inject, Input, signal, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  private router = inject(Router)
  @Input() navSelection!: string;
  @Input() pageNumber: number = 1;

  getNewsByCatigory(category: any, pageNumber: any){
    this.NewsDataService.getNewsByCatigory(category, pageNumber);
    this.router.navigate([category,pageNumber])
  }
  
 ngOnInit() {
 }


}
