import { Component } from '@angular/core';
import { NgbNavChangeEvent, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

}
