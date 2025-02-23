import { Routes } from '@angular/router';
import { NavigateComponent } from './navigate/navigate.component';
import { AllNewsComponent } from './all-news/all-news/all-news.component';


export const  routes: Routes = [
    { path: 'home', component: AllNewsComponent },
    { path: 'category/:select', component: NavigateComponent },


];
