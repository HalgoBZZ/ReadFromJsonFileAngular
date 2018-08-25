import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsComponentComponent } from './project-details-component.component';

describe('ProjectDetailsComponentComponent', () => {
  let component: ProjectDetailsComponentComponent;
  let fixture: ComponentFixture<ProjectDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
