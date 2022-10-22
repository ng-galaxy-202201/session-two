import { TestBed } from '@angular/core/testing';

import { ShouldLeaveGuard } from './should-leave.guard';

describe('ShouldLeaveGuard', () => {
  let guard: ShouldLeaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShouldLeaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
