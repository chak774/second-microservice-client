import { TestBed, inject } from '@angular/core/testing';

import { SecondMicroserviceService } from './second-microservice.service';

describe('SecondMicroserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondMicroserviceService]
    });
  });

  it('should be created', inject([SecondMicroserviceService], (service: SecondMicroserviceService) => {
    expect(service).toBeTruthy();
  }));
});
