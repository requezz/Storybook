import { TestBed } from '@angular/core/testing';

import { StoreTestService } from './store-test.service';

describe('StoreTestService', () => {
  let service: StoreTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Функция суммирования', () => {
    expect(service.sum(
      100,
      50
    )).toEqual(150);
  } );
});
