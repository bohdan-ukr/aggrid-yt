import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HttpParams } from '@angular/common/http';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CheckboxComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger checkbox when clicking', fakeAsync(() => {
    const inputCheckbox: HTMLInputElement = fixture.debugElement.query(By.css('.custom-checkbox')).nativeElement;
    expect(inputCheckbox.checked).toBeFalsy();

    fixture.detectChanges();
    //select All
    inputCheckbox.click();
    expect(inputCheckbox.checked).toBeTruthy();
    //deselect All
    inputCheckbox.click();
    expect(inputCheckbox.checked).toBeFalsy();
  }));


});
