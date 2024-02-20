// question.service.ts
import { Injectable } from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of, Observable } from 'rxjs';

@Injectable()
export class QuestionService {

  // This method returns an Observable of questions
  getQuestions(): Observable<QuestionBase<string>[]> {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'residentStatus',
        label: 'Resident / Non-Resident',
        options: [
          { key: 'Resident', value: 'Resident' },
          { key: 'Non-Resident', value: 'Non-Resident' }
        ],
        order: 2
      }),
      new TextboxQuestion({
        key: 'fatherName',
        label: "Father's Name",
        order: 1
      }),
      new TextboxQuestion({
        key: 'motherName',
        label: "Mother's Name",
        order: 1
      }),
      new TextboxQuestion({
        key: 'hobby1',
        label: 'Hobby 1',
        order: 3
      }),
      new TextboxQuestion({
        key: 'hobby2',
        label: 'Hobby 2',
        order: 3
      }),
      new TextboxQuestion({
        key: 'hobby3',
        label: 'Hobby 3',
        order: 3
      }),
      new TextboxQuestion({
        key: 'remarks',
        label: 'Remarks',
        order: 4
      })
    ];
    // Using of operator from RxJS to create an Observable of questions
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
