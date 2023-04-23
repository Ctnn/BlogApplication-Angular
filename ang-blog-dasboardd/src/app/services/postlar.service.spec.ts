import { TestBed } from '@angular/core/testing';

import { PostlarService } from './postlar.service';

describe('PostlarService', () => {
  let service: PostlarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostlarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
