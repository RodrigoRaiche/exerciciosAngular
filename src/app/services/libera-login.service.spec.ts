import { TestBed } from '@angular/core/testing';

import { LiberaLoginService } from './libera-login.service';

describe('LiberaLoginService', () => {
  let service: LiberaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiberaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
