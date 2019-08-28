import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ArrayQuestion } from './question-array';
import { QuestionControlService } from './question-control.service';
import { RadioQuestion } from './question-radio';
import { DateQuestion } from './question-date';

@Injectable()
export class QuestionService {
  /**
   *
   */
  constructor() { }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'institution',
        label: 'Last Institution',
        options: [
          { label: 'Swansea University', value: 'Swansea' },
          { label: 'Other', value: 'Other' }
        ],
        order: 3,
        required: true,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Fred',
        required: true,
        order: 1,
        type: 'text',
        valueChangesMethod: (value: string, form: FormGroup) => {
          if (value === 'Mike') {
            form.get('lastName').setValue('Ashford');
          }
        }
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: 'Jones',
        required: true,
        order: 2,
        type: 'text'
      }),

      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        value: '',
        required: false,
        order: 4,
        type: 'text'
      }),

      new TextboxQuestion({
        key: 'overseasInstitution',
        label: 'Institution Name',
        type: 'text',
        order: 5,
        showQuestionMethod: (form: FormGroup) => {
          return form.get('institution').value === 'Other'
        }
      }),

      new ArrayQuestion({
        key: 'qualifications',
        label: 'Qualifications',
        value: [],
        order: 6,
        questionsMethod: () => [
          new TextboxQuestion({
            key: 'qualName',
            label: 'Name',
            value: '',
            order: 1,
            type: 'text'
          }),

          new TextboxQuestion({
            key: 'qualResult',
            label: 'Result',
            value: '',
            order: 2,
            type: 'text'
          }),

          new DropdownQuestion({
            key: 'someKey',
            label: 'Some label',
            options: [
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' }
            ],
            order: 3
          })
          ,
          new ArrayQuestion({
            key: 'modules',
            label: 'Modules',
            value: [],
            order: 5,
            questionsMethod: () => [
              new TextboxQuestion({
                key: 'abc',
                label: 'something else',
                value: '',
                order: 1,
                type: 'text'
              }),
              new ArrayQuestion({
                key: 'modulesections',
                label: 'Sections',
                value: [],
                order: 2,
                questionsMethod: () => [
                  new TextboxQuestion({
                    key: 'moduleSectionName',
                    label: 'Name',
                    value: '',
                    order: 1,
                    type: 'text'
                  }),
                  new TextboxQuestion({
                    key: 'moduleSectionGrade',
                    label: 'Grade',
                    value: '',
                    order: 2,
                    type: 'text'
                  })],
              })
            ]
          })
        ]
      }),

      new RadioQuestion({
        key: 'someOptionsRadio',
        label: 'Pick an option',
        order: 8,
        options: [
          { label: 'A', value: 'A' },
          { label: 'B', value: 'B' },
          { label: 'C', value: 'C' },
          { label: 'D', value: 'D' }
        ]
      }),

      new DateQuestion({
        key: 'dob',
        label: 'Date of Birth',
        order: 9,
        required: true,
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
