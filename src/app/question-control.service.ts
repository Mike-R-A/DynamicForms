import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

import { QuestionBase } from './question-base';
import { ArrayQuestion } from './question-array';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      if (question.controlType === 'array') {
        const controls = question.value.map(subsection => {
          return this.toFormGroup(subsection);
        })
        group[question.key] = new FormArray(controls);
      } else {
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }
}
