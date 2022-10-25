import { TestBed } from '@angular/core/testing';

import { DishMenuService } from './dish-menu.service';

describe('DishMenuService', () => {
  let service: DishMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
