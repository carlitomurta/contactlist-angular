import { TestBed } from '@angular/core/testing';

import { ContactlistService } from './contactlist.service';

describe('ContactlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactlistService = TestBed.get(ContactlistService);
    expect(service).toBeTruthy();
  });
});
