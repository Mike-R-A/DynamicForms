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
  constructor() { }

  tabs = [{
    label: 'Header.Personal',
    maxQuestionNumber: 2
  },
  {
    label: 'Header.Education',
    maxQuestionNumber: 4
  },
  {
    label: 'Header.Other',
    maxQuestionNumber: this.questions.length
  }
  ];

  get questions() {

    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'title',
        label: 'Label.Title',
        options: [
          { label: 'Mr', value: 'Mr' },
          { label: 'Mrs', value: 'Mrs' },
          { label: 'Miss', value: 'Miss' },
          { label: 'Other', value: 'Other' },
        ],
        order: 0,
        required: true,
      }),
      new DropdownQuestion({
        key: 'institution',
        label: 'Label.LastInstitution',
        options: [
          { label: 'Swansea University', value: 'Swansea' },
          { label: 'Other', value: 'Other' }
        ],
        order: 3,
        required: true,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'Label.FirstName',
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
        label: 'Label.LastName',
        value: 'Jones',
        required: true,
        order: 2,
        type: 'text'
      }),

      new TextboxQuestion({
        key: 'someothername',
        label: 'Label.someothername',
        value: 'Jones',
        required: true,
        order: 2,
        type: 'text'
      }),

      new TextboxQuestion({
        key: 'email',
        label: 'Label.Email',
        value: '',
        required: false,
        order: 4,
        type: 'text'
      }),

      new TextboxQuestion({
        key: 'overseasInstitution',
        label: 'Label.InstitutionName',
        type: 'text',
        order: 5,
        showQuestionMethod: (form: FormGroup) => {
          return form.get('institution').value === 'Other'
        }
      }),

      new ArrayQuestion({
        key: 'qualifications',
        label: 'Label.Qualifications',
        addButtonLabel: 'Button.AddQualification',
        removeButtonLabel: 'Button.RemoveQualification',
        value: [],
        order: 6,
        questionsMethod: () => [
          new TextboxQuestion({
            key: 'qualName',
            label: 'Label.QualificationName',
            value: '',
            order: 1,
            type: 'text'
          }),

          new TextboxQuestion({
            key: 'qualResult',
            label: 'Label.QualificationResult',
            value: '',
            order: 2,
            type: 'text'
          }),
          new ArrayQuestion({
            key: 'modules',
            label: 'Label.Modules',
            addButtonLabel: 'Button.AddModule',
            removeButtonLabel: 'Button.RemoveModule',
            value: [],
            order: 5,
            questionsMethod: () => [
              new TextboxQuestion({
                key: 'moduleName',
                label: 'Label.ModuleName',
                value: '',
                order: 1,
                type: 'text'
              }),
              new TextboxQuestion({
                key: 'moduleResult',
                label: 'Label.ModuleResult',
                value: '',
                order: 1,
                type: 'text'
              })
            ]
          })
        ]
      }),

      new RadioQuestion({
        key: 'someOptionsRadio',
        label: 'Label.PickAnOption',
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
        label: 'Label.DateOfBirth',
        order: 9,
        required: true,
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
