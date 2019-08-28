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
                    Label: {
                        LastInstitution: 'Sefydliad Diwethaf',
                        FirstName: 'Enw cyntaf',
                        LastName: 'Cyfenw',
                        Email: 'E-bost',
                        Qualification: 'Cymhwyster',
                    },
                    Button: {
                        AddQualification: 'Ychwanegu Cymhwyster',
                        RemoveQualification: 'Dileu Cymhwyster',
                    }
                })
            }
            default: {
                return of({
                    Label: {
                        LastInstitution: 'Last Institution',
                        FirstName: 'First Name',
                        LastName: 'Surname',
                        Email: 'Email',
                        Qualification: 'Qualification',
                    },
                    Button: {
                        AddQualification: 'Add Qualification',
                        RemoveQualification: 'Remove Qualification',
                    }
                })
            }
        }

    }
}