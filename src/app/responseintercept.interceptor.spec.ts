import { TestBed } from '@angular/core/testing';

import { ResponseinterceptInterceptor } from './responseintercept.interceptor';

describe('ResponseinterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResponseinterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResponseinterceptInterceptor = TestBed.inject(ResponseinterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
