import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { map, mergeMap, noop, Observable, of, tap } from "rxjs";
import { OmdbService } from "../services/omdb.service";

//
export class MoviesDataSource<T> extends DataSource<T> {

  private dataService: OmdbService;

  searchTerm$: Observable<string> = of('');

  constructor(dataService: OmdbService, searchTerm$?: Observable<string>) {
    super();
    this.dataService = dataService;
    this.searchTerm$ = searchTerm$ ?? this.searchTerm$;
  }

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return this.searchTerm$.pipe(
      mergeMap((searchTerm) => {
        return this.dataService.search(searchTerm);
      }),
      map<any, T[]>((resp) => resp['Search']),
      tap((resp) => console.log(resp))
    );
  }

  disconnect(collectionViewer: CollectionViewer): void {
    noop();
  }

}
