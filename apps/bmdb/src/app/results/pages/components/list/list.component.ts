import { Component, Input, OnInit } from '@angular/core';
import { MoviesDataSource } from "../../../../logic/datasource/movies-data-source";
import { MovieSearchDetails } from "../../../../logic/models/movie.model";

@Component({
  selector: 'bmdb-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input() dataSource!: MoviesDataSource<MovieSearchDetails>;
  @Input() displayedColumns = ['title']
}
