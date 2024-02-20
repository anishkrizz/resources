import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

describe('DynamicFormQuestionComponent', () => {
  let component: DynamicFormQuestionComponent;
  let fixture: ComponentFixture<DynamicFormQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormQuestionComponent]
    });
    fixture = TestBed.createComponent(DynamicFormQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
