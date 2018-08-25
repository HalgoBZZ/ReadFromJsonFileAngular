import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjComponent } from './new-proj.component';

describe('NewProjComponent', () => {
  let component: NewProjComponent;
  let fixture: ComponentFixture<NewProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
