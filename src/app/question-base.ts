import { FormGroup } from '@angular/forms';

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  showQuestion: (form: FormGroup) => boolean;
  valueChangesMethod: (value: any, form: FormGroup) => void;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string
    showQuestionMethod?: (form: FormGroup) => boolean,
    valueChangesMethod?: (value: any, form: FormGroup) => void;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.showQuestion = options.showQuestionMethod || (() => { return true });
    this.valueChangesMethod = options.valueChangesMethod || (() => { });
  }
}
