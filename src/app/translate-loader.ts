import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class CustomTranslateLoader implements TranslateLoader {
    constructor(http: HttpClient) {

    }
    getTranslation(lang: string): Observable<any> {
        switch (lang) {
            case 'cy-GB': {
                return of({
                    Header: {
                        FormTitle: 'Ffurf Dynamig',
                        Personal: 'Personol',
                        Education: 'Addysg',
                        Other: 'Arall'
                    },
                    Label: {
                        LastInstitution: 'Sefydliad Diwethaf',
                        InstitutionName: 'Enw\'r Sefydliad',
                        FirstName: 'Enw cyntaf',
                        LastName: 'Cyfenw',
                        Email: 'E-bost',
                        Qualifications: 'Cymwysterau',
                        QualificationResult: 'Canlyniad',
                        QualificationName: 'Enw',
                        Modules: 'Modiwlau',
                        ModuleName: 'Enw',
                        ModuleResult: 'Canlyniad',
                        DateOfBirth: 'Dyddiad Geni',
                        PickAnOption: 'Dewiswch opsiwn',
                    },
                    Button: {
                        AddQualification: 'Ychwanegu Cymhwyster',
                        RemoveQualification: 'Dileu Cymhwyster',
                        AddModule: 'Ychwanegu Modiwl',
                        RemoveModule: 'Tynnu Modiwl',
                        Save: 'Cadw',
                        Submit: 'Cyflwyno',
                    },
                    Validation: {
                        IsRequired: 'yn ofynnol',
                        Incomplete: 'Anghyflawn'
                    }
                })
            }
            default: {
                return of({
                    Header: {
                        FormTitle: 'Dynamic Form',
                        Personal: 'Personal',
                        Education: 'Education',
                        Other: 'Other'
                    },
                    Label: {
                        LastInstitution: 'Last Institution',
                        InstitutionName: 'Institution Name',
                        FirstName: 'First Name',
                        LastName: 'Surname',
                        Email: 'Email',
                        Qualifications: 'Qualifications',
                        QualificationResult: 'Result',
                        QualificationName: 'Name',
                        Modules: 'Modules',
                        ModuleName: 'Name',
                        ModuleResult: 'Result',
                        DateOfBirth: 'Date of Birth',
                        PickAnOption: 'Pick an option',
                    },
                    Button: {
                        AddQualification: 'Add Qualification',
                        RemoveQualification: 'Remove Qualification',
                        AddModule: 'Add Module',
                        RemoveModule: 'Remove Module',
                        Save: 'Save',
                        Submit: 'Submit',
                    },
                    Validation: {
                        IsRequired: 'is required',
                        Incomplete: 'Incomplete'
                    }
                })
            }
        }

    }
}