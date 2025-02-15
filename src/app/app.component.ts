import { Component, importProvidersFrom, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AllNewsComponent } from "./all-news/all-news/all-news.component";
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from "./footer/footer.component";  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AllNewsComponent, FooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {

  constructor() {
  }
 
  title = 'news-Daily';
}
