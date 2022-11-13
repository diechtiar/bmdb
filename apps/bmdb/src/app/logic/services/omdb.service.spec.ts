import { TestBed } from '@angular/core/testing';

import { OmdbService } from './omdb.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('OmdbService', () => {
  let service: OmdbService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OmdbService]
    });
    service = TestBed.inject(OmdbService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
