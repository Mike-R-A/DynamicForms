import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

export class ArrayQuestion extends QuestionBase<QuestionBase<any>[][]> {
    controlType = 'array';
    questions: QuestionBase<any>[] = [];
    questionControlService: QuestionControlService;

    constructor(options: any = {}) {
        super(options);
        this.questions = options.questions;
        this.questionControlService = new QuestionControlService();
    }

    add(formArray: FormArray) {
        this.value.push(this.questions);
        const controls = this.questionControlService.toFormGroup(this.questions);
        formArray.push(controls);
    }

    remove(index: number, formArray: FormArray) {
        formArray.removeAt(index);
        this.value.splice(index, 1);
    }

}
