import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search/search-page.component';
import { SearchRoutingModule } from "./search-routing.module";



@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  exports: [SearchPageComponent]
})
export class SearchModule { }
