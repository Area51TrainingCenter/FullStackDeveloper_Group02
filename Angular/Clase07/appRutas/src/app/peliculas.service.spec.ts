import { TestBed, inject } from '@angular/core/testing';

import { PeliculasService } from './peliculas.service';

describe('PeliculasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeliculasService]
    });
  });

  it('should be created', inject([PeliculasService], (service: PeliculasService) => {
    expect(service).toBeTruthy();
  }));
});
