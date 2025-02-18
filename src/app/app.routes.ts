import { Routes } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { AllNewsComponent } from './all-news/all-news/all-news.component';


export const routes: Routes = [
    { path: 'Home', component: AllNewsComponent },
    { path: 'category', component: NavigateComponent },


];
