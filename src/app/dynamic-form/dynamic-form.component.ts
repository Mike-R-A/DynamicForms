import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor(private questionsService: QuestionService, private questionControlService: QuestionControlService) {
    this.questions = this.questionsService.getQuestions();
  }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
    console.log(this.questions);

  }

  submit() {
    if (this.form.invalid) {
      this.markFormGroupTouched(this.form);
    }
    console.log(this.form.value);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).keys(formGroup.controls).map((x: any) => formGroup.controls[x]).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
