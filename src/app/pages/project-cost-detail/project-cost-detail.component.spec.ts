import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCostDetailComponent } from './project-cost-detail.component';

describe('ProjectCostDetailComponent', () => {
  let component: ProjectCostDetailComponent;
  let fixture: ComponentFixture<ProjectCostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
