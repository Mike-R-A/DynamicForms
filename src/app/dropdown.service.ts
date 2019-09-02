import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface SelectItem {
  label: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  constructor() { }

  get titles() {
    return of([
      { label: 'Mr', value: 'Mr' },
      { label: 'Mrs', value: 'Mrs' },
      { label: 'Miss', value: 'Miss' },
      { label: 'Other', value: 'Other' },
    ]);
  }

  get institutions() {
    return of([
      { label: 'Swansea University', value: 'Swansea' },
      { label: 'Other', value: 'Other' }
    ]);
  }
}
