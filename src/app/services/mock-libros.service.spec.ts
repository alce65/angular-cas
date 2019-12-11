import { TestBed } from '@angular/core/testing';

import { MockLibrosService } from './mock-libros.service';

describe('MockLibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockLibrosService = TestBed.get(MockLibrosService);
    expect(service).toBeTruthy();
  });
});
