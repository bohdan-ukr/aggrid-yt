import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';

import { YoutubeComponent } from './youtube.component';

describe('YoutubeComponent', () => {
  let component: YoutubeComponent;
  let fixture: ComponentFixture<YoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgGridModule,
        HttpClientTestingModule
      ],
      declarations: [
        YoutubeComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the grid cells should be as expected', () => {
    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('.ag-header-cell-text');

    expect(cellElements.length).toEqual(4);
    expect(cellElements[1].textContent).toEqual("Video Title");
    expect(cellElements[2].textContent).toEqual("Description");
    expect(cellElements[3].textContent).toEqual("Published on");
  });
});
