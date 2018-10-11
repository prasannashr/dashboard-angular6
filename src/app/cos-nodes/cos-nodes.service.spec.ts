import { TestBed, inject } from '@angular/core/testing';

import { CosNodesService } from './cos-nodes.service';

describe('CosNodesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosNodesService]
    });
  });

  it('should be created', inject([CosNodesService], (service: CosNodesService) => {
    expect(service).toBeTruthy();
  }));
});
