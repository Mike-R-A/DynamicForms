import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() title: string;
  form: FormGroup;
  payLoad = '';

  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.payLoad);
  }
}
