import { Routes } from '@angular/router';
import {

    NavigateComponent,

} from './navigate/navigate.component';
import { AllNewsComponent } from './all-news/all-news/all-news.component';
import { NewsArticleComponent } from './news-article/news-article.component';


export const routes: Routes = [
    {
        path: 'home',
        component: AllNewsComponent
    },
    {
        path: 'newsaritcle',
        component: NewsArticleComponent
    },
    {
        path: ':navSelection',
        component: NavigateComponent,
        children: [
            {
                path: ':pageNumber',
                component: NavigateComponent,
            }
        ]
    },

];
