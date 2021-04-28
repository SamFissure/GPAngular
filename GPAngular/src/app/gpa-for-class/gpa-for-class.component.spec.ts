import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPAForClassComponent } from './gpa-for-class.component';

describe('GPAForClassComponent', () => {
  let component: GPAForClassComponent;
  let fixture: ComponentFixture<GPAForClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPAForClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GPAForClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
