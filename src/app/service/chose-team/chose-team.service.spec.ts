import { TestBed, inject } from '@angular/core/testing';

import { ChoseTeamService } from './chose-team.service';

describe('ChoseTeamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChoseTeamService]
    });
  });

  it('should be created', inject([ChoseTeamService], (service: ChoseTeamService) => {
    expect(service).toBeTruthy();
  }));
});
