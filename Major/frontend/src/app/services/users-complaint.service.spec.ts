import { TestBed } from '@angular/core/testing';

import { UsersComplaintService } from './users-complaint.service';

describe('UsersComplaintService', () => {
  let service: UsersComplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersComplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
