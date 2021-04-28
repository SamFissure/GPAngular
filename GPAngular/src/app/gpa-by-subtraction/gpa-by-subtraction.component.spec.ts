import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPABySubtractionComponent } from './gpa-by-subtraction.component';

describe('GPABySubtractionComponent', () => {
  let component: GPABySubtractionComponent;
  let fixture: ComponentFixture<GPABySubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPABySubtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPABySubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
