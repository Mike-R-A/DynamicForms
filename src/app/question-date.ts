import { QuestionBase } from './question-base';

export class DateQuestion extends QuestionBase<string> {
    controlType = 'date';

    constructor(options: {} = {}) {
        super(options);
    }
}
