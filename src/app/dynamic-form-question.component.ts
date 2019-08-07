import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit, OnDestroy {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  changesSubscription: Subscription;
  get isValid() {
    return this.form.controls[this.question.key] ? this.form.controls[this.question.key].valid : true;
  }

  ngOnInit() {
    console.log(this.question, this.form);

    if (this.question.valueChangesMethod && this.form.get(this.question.key)) {
      this.changesSubscription = this.form.get(this.question.key).valueChanges.subscribe(v => {
        this.question.valueChangesMethod(v, this.form)
      });
    }
  }

  ngOnDestroy() {
    if (this.changesSubscription) {
      this.changesSubscription.unsubscribe();
    }
  }
}
