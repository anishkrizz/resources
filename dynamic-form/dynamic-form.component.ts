import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import {DynamicFormQuestionComponent} from './dynamic-form-question.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService],
  

})
export class DynamicFormComponent implements OnInit {
  _formName = "Dynamic form";
  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
