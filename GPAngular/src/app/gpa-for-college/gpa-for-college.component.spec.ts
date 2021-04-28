import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPAForCollegeComponent } from './gpa-for-college.component';

describe('GPAForCollegeComponent', () => {
  let component: GPAForCollegeComponent;
  let fixture: ComponentFixture<GPAForCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPAForCollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPAForCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
