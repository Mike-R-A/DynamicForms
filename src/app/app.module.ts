import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/fieldset';
import { QuestionControlService } from './question-control.service';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    HomeModule,
    RouterModule,
    AppRoutingModule,
    DynamicFormModule,
    SharedModule
  ],
  declarations: [AppComponent],
  providers: [
    QuestionControlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
