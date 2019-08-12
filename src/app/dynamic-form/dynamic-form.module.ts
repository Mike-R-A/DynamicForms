import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
