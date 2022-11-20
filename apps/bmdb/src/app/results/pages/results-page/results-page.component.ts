import { Component, OnInit } from '@angular/core';
import { OmdbService } from "../../../logic/services/omdb.service";
import { MoviesDataSource } from "../../../logic/datasource/movies-data-source";
import { MovieSearchDetails, MoviesSearchResp } from "../../../logic/models/movie.model";
import { Observable, of } from "rxjs";

@Component({
  selector: 'bmdb-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.css'],
})
export class ResultsPageComponent extends MoviesDataSource<MovieSearchDetails> {

  public dataSource: MoviesDataSource<MovieSearchDetails>;
  override searchTerm$: Observable<string> = of('');

  constructor(dataService: OmdbService) {
    super(dataService);
    this.dataSource = new MoviesDataSource(dataService, this.searchTerm$);
  }
}
