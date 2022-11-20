import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OmdbService } from "../../../logic/services/omdb.service";
import { Observable } from "rxjs";
import { MovieDetails, MoviesSearchResp } from "../../../logic/models/movie.model";
import { FormControl } from "@angular/forms";
import { BaseComponent } from "../../../shared/components/base/base.component";

@Component({
  selector: 'bmdb-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent extends BaseComponent implements OnInit, AfterViewInit {

  searchTerm = '';

  movies$?: Observable<MoviesSearchResp>;
  movieDetails$?: Observable<MovieDetails>;

  @ViewChild('searchForm') searchForm!: FormControl;

  constructor(private omdbService: OmdbService) {
    super();
  }

  ngOnInit(): void {
    this.movieDetails$ = this.omdbService.getDetails('tt0165798');
  }

  ngAfterViewInit() {
    this.searchForm.valueChanges.pipe(this.takeUntilDestroyed())
      .subscribe(
        (resp) => console.log(resp)
      )
  }

  search() {
    const term = this.searchForm.value.search;
    this.movies$ = this.omdbService.search(term);
  }

}
