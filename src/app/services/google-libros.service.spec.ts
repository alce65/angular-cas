import { TestBed } from '@angular/core/testing';

import { GoogleLibrosService } from './google-libros.service';

describe('GoogleLibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleLibrosService = TestBed.get(GoogleLibrosService);
    expect(service).toBeTruthy();
  });
});
