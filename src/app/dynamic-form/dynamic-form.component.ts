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
  title: string = "Dynamic form";
  form: FormGroup;
  payLoad = '';

  constructor(private questionsService: QuestionService, private questionControlService: QuestionControlService) {
    this.questions = this.questionsService.getQuestions();
  }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
    console.log(this.questions);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.form.value);
  }
}
