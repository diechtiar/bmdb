import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './pages/search/search-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [SearchPageComponent, SearchInputComponent],
  imports: [CommonModule, SearchRoutingModule, ...materialModules, FormsModule, ],
  exports: [SearchPageComponent],
  providers: []
})
export class SearchModule {}
