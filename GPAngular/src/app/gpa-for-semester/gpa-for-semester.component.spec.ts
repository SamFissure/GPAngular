import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPAForSemesterComponent } from './gpa-for-semester.component';

describe('GPAForSemesterComponent', () => {
  let component: GPAForSemesterComponent;
  let fixture: ComponentFixture<GPAForSemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPAForSemesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPAForSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
