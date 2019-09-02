import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionControlService } from './question-control.service';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { SharedModule } from './shared/shared.module';
import { MomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { CustomTranslateLoader } from './translate-loader';
import { HttpClient } from '@angular/common/http';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NotificationService } from './notification/notification.service';
import { NotificationComponent } from './notification/notification.component';
import { FormComponent } from './form/form.component';

export function createTranslateLoader(http: HttpClient) {
  return new CustomTranslateLoader(http);
}

@NgModule({
  imports: [
    HomeModule,
    RouterModule,
    AppRoutingModule,
    DynamicFormModule,
    SharedModule,
    MomentDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  declarations: [AppComponent, NotificationComponent, FormComponent],
  providers: [
    QuestionControlService,
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['DD/MM/YYYY'],
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    },
    NotificationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NotificationComponent
  ]
})
export class AppModule {
  constructor() {
  }
}
