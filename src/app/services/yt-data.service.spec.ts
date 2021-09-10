import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YtDataService } from './yt-data.service';

describe('YtDataService', () => {
  let service: YtDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(YtDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
