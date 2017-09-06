import { TestBed, inject } from '@angular/core/testing';

import { GetmatchService } from './getmatch.service';

describe('GetmatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetmatchService]
    });
  });

  it('should be created', inject([GetmatchService], (service: GetmatchService) => {
    expect(service).toBeTruthy();
  }));
});
