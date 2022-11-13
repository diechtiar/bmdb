import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { combineLatest, map, mergeMap, Observable, of, pluck, startWith, tap } from "rxjs";
import { OmdbService } from "../services/omdb.service";
import { MovieSearchDetails, MoviesSearchResp } from "../models/movie.model";

export class MoviesDataSource<T> extends DataSource<T> {

  private dataService: OmdbService;

  searchTerm$: Observable<string> = of('');

  constructor(dataService: OmdbService, searchTerm$?: Observable<string>) {
    super();
    this.dataService = dataService;
    this.searchTerm$ = searchTerm$ ?? this.searchTerm$;
  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    const movies$ = this.searchTerm$.pipe(
      mergeMap((searchTerm) => {
        return this.dataService.search(searchTerm);
      }),
      map<any, T[]>((resp) => resp['Search']),
      tap((resp) => console.log(resp))
    );

    return movies$;
  }

  disconnect(collectionViewer: CollectionViewer): void {
  }

}
