import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./error-handling/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: "full"
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then(m => m.ResultsModule)

  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
