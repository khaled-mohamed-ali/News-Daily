import { Routes } from '@angular/router';
import {

    NavigateComponent,
    newsResolver
} from './navigate/navigate.component';
import { AllNewsComponent } from './all-news/all-news/all-news.component';


export const routes: Routes = [
    { path: 'home', component: AllNewsComponent },
    {
        path: ':navSelection',
        component: NavigateComponent,
        resolve: {
            data: newsResolver
        },
        children: [
            {
                path: ':pageNumber',
                component: NavigateComponent,
                resolve: {
                    data: newsResolver
                },
            }
        ]
    },


];
