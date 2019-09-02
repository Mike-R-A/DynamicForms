import { QuestionBase } from './question-base';

export class FileQuestion extends QuestionBase<string> {
    controlType = 'file';
    type = 'file';
    constructor(options: {} = {}) {
        super(options);
    }
}
