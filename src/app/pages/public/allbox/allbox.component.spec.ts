import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllboxComponent } from './allbox.component';

describe('AllboxComponent', () => {
  let component: AllboxComponent;
  let fixture: ComponentFixture<AllboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
