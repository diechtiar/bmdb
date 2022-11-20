import { RouterModule } from "@angular/router";
import { SearchPageComponent } from "./pages/search/search-page.component";
import { NgModule } from "@angular/core";

const routes = [
  {
    path: '',
    component: SearchPageComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
