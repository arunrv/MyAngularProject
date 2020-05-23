import { TestBed, inject } from '@angular/core/testing';

import { NotificationUpdatedService } from './notification-updated.service';

describe('NotificationUpdatedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationUpdatedService]
    });
  });

  it('should be created', inject([NotificationUpdatedService], (service: NotificationUpdatedService) => {
    expect(service).toBeTruthy();
  }));
});
