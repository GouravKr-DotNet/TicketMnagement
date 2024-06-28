import { TestBed } from '@angular/core/testing';

import { CheckUserAuthGuard } from './check-user-auth.guard';

describe('CheckUserAuthGuard', () => {
  let guard: CheckUserAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckUserAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
