import { TestBed } from '@angular/core/testing';

import { ServeExperienceService } from './serve-experience.service';

describe('ServeExperienceService', () => {
  let service: ServeExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
