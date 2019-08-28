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

@NgModule({
  imports: [
    HomeModule,
    RouterModule,
    AppRoutingModule,
    DynamicFormModule,
    SharedModule,
    MomentDateModule
  ],
  declarations: [AppComponent],
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
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
