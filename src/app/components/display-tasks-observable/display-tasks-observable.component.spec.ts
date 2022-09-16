import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTasksObservableComponent } from './display-tasks-observable.component';

describe('DisplayTasksObservableComponent', () => {
  let component: DisplayTasksObservableComponent;
  let fixture: ComponentFixture<DisplayTasksObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTasksObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTasksObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
