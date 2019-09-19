import { TestBed } from '@angular/core/testing';

import { IquoteService } from './iquote.service';

describe('IquoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IquoteService = TestBed.get(IquoteService);
    expect(service).toBeTruthy();
  });
});
