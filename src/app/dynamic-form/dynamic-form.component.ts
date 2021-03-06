import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { QuestionService } from '../question.service';
import { NotificationService } from '../notification/notification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() tabs: { label: string, maxQuestionNumber: number }[] = [];
  @Input() formTitle: string;
  form: FormGroup;

  submitHasBeenClicked = false;

  constructor(private questionControlService: QuestionControlService,
    private notificationService: NotificationService, private translateService: TranslateService) {
  }

  ngOnInit() {
    this.questions.sort((a, b) => a.order - b.order);
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  save() {
    this.translateService.get('Message.Saved').subscribe(message => {
      this.notificationService.openSnackBar(message);
    });
    console.log(this.form.value);
  }

  submit() {
    this.submitHasBeenClicked = true;
    if (this.form.invalid) {
      this.markFormGroupTouched(this.form);
      this.translateService.get('Message.SubmissionFailInvalid').subscribe(message => {
        this.notificationService.openSnackBar(message);
      });
    } else {
      this.translateService.get('Message.Submitted').subscribe(message => {
        this.notificationService.openSnackBar(message);
      });
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
