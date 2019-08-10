import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

export class ArrayQuestion extends QuestionBase<QuestionBase<any>[][]> {
    controlType = 'array';
    questionsMethod: () => QuestionBase<any>[];
    questionControlService: QuestionControlService;
    addButtonLabel: string;
    removeButtonLabel: string;

    constructor(options: any = {}) {
        super(options);
        this.questionsMethod = options.questionsMethod;
        this.questionControlService = new QuestionControlService();
        this.addButtonLabel = options.addButtonLabel;
        this.removeButtonLabel = options.removeButtonLabel;
    }

    add(formArray: FormArray) {
        this.value.push(this.questionsMethod());
        const controls = this.questionControlService.toFormGroup(this.questionsMethod());
        formArray.push(controls);
    }

    remove(index: number, formArray: FormArray) {
        formArray.removeAt(index);
        this.value.splice(index, 1);
    }

    get addLabel() {
        return this.addButtonLabel || 'Add ' + this.dePluralise(this.label);
    }

    get removeLabel() {
        return this.removeButtonLabel || 'Remove ' + this.dePluralise(this.label);
    }

    private dePluralise(word: string) {
        if (word) {
            if (word[word.length - 1].toLowerCase() == 's') {
                return word.slice(0, word.length - 1);
            }
        }
        return word;
    }
}
