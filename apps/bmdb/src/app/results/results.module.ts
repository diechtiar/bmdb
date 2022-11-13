import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { ListComponent } from './pages/components/list/list.component';
import { MatTableModule } from "@angular/material/table";
import { ResultsRoutingModule } from "./results-routing.module";

const materialModules = [
  MatTableModule
]

@NgModule({
  declarations: [ResultsPageComponent, ListComponent],
  imports: [CommonModule, ResultsRoutingModule, ...materialModules],
})
export class ResultsModule {}
