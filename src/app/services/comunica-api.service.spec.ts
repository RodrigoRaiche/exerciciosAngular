import { TestBed } from '@angular/core/testing';

import { ComunicaAPIService } from './comunica-api.service';

describe('ComunicaAPIService', () => {
  let service: ComunicaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
