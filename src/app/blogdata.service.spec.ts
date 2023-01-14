import { TestBed } from '@angular/core/testing';

import { BlogdataService } from './blogdata.service';

describe('BlogdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogdataService = TestBed.get(BlogdataService);
    expect(service).toBeTruthy();
  });
});
