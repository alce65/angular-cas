import { TestBed } from '@angular/core/testing';

import { StoreTareasService } from './store-tareas.service';

describe('StoreTareasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreTareasService = TestBed.get(StoreTareasService);
    expect(service).toBeTruthy();
  });
});
