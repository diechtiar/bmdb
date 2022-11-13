import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MovieDetails, MoviesSearchResp } from "../models/movie.model";
import { Observable, of } from "rxjs";
import { mockMovieDetailsResult, mockSearchResults } from "./movies-mock";
import { environment } from "../../../environments/environment";

const apiUrl = environment.apiUrl;
const mockMovieDetails = mockMovieDetailsResult;

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<MoviesSearchResp> {
    return this.http.get<MoviesSearchResp>(apiUrl, {params: {'s': searchTerm}});
  }

  getDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(apiUrl, { params: {'i': id}});
  }
}
