import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  tabs: { label: string, maxQuestionNumber: number }[] = [];
  submitHasBeenClicked = false;

  constructor(private questionsService: QuestionService, private questionControlService: QuestionControlService) {
    this.questions = this.questionsService.questions;
    this.tabs = this.questionsService.tabs;
  }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  save() {
    console.log(this.form.value);
  }

  submit() {
    this.submitHasBeenClicked = true;
    if (this.form.invalid) {
      this.markFormGroupTouched(this.form);
    }
    console.log(this.form.value);
  }


  public markFormGroupTouched(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.controls[key];

      if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
        this.markFormGroupTouched(abstractControl);
      } else {
        abstractControl.markAsTouched();
      }
    });
  }

  getQuestions(tabIndex: number) {
    const previousQuestionNumber = this.getPreviousQuestionNumber(tabIndex);

    return this.questions.slice(previousQuestionNumber, this.tabs[tabIndex].maxQuestionNumber);
  }

  private getPreviousQuestionNumber(tabIndex: number) {
    let previousQuestionNumber = 0;
    if (tabIndex - 1 > -1) {
      previousQuestionNumber = this.tabs[tabIndex - 1].maxQuestionNumber;
    }
    return previousQuestionNumber;
  }

  isTabValid(tabIndex: number) {
    const previousQuestionNumber = this.getPreviousQuestionNumber(tabIndex);
    const maxQuestionNumber = this.tabs[tabIndex].maxQuestionNumber;

    const isTabValid = Object.keys(this.form.controls).slice(previousQuestionNumber, maxQuestionNumber).map(key => {
      return this.form.controls[key].valid
    }).every(v => v === true);

    return isTabValid;
  }
}
