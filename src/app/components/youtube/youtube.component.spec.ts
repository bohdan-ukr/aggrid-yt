import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from 'ag-grid-angular';
import { YtDataService } from 'src/app/services/yt-data.service';

import { YoutubeComponent } from './youtube.component';

let component: YoutubeComponent;
let fixture: ComponentFixture<YoutubeComponent>;


describe('YoutubeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgGridModule,
        HttpClientTestingModule
      ],
      declarations: [
        YoutubeComponent
      ],
      providers: [YtDataService]
    })
      .compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('the grid cells text should be as expected', () => {
    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('.ag-header-cell-text');

    expect(cellElements.length).toEqual(4);
    expect(cellElements[1].textContent).toEqual("Video Title");
    expect(cellElements[2].textContent).toEqual("Description");
    expect(cellElements[3].textContent).toEqual("Published on");
  });

  it('the grid cells width should be as expected', () => {
    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('.ag-header-cell');

    expect(cellElements[0].style.width).toEqual("50px");
    expect(cellElements[1].style.width).toEqual("150px");
  });


  it('getting the selected row data from the grid', () => {
    fixture.detectChanges();
    expect(component.agGrid.api).toBeTruthy();
    let some_Data = component.agGrid.api.getSelectedRows();
    expect(some_Data).toBeDefined();
  });


});
