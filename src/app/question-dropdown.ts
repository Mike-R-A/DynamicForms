import { QuestionBase } from './question-base';
import { Observable, of } from 'rxjs';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: Observable<{ key: string, value: any }[]>;

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
