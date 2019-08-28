import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// import { InputTextModule } from 'primeng/inputtext';
// import { DropdownModule } from 'primeng/dropdown';
// import { ButtonModule } from 'primeng/button';
// import { PanelModule } from 'primeng/panel';
// import { FieldsetModule } from 'primeng/fieldset';
// import { CardModule } from 'primeng/card';
// import { SidebarModule } from 'primeng/sidebar';#
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // InputTextModule,
    // DropdownModule,
    // ButtonModule,
    // PanelModule,
    // FieldsetModule,
    // CardModule,
    // SidebarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    // InputTextModule,
    // DropdownModule,
    // ButtonModule,
    // PanelModule,
    // FieldsetModule,
    // CardModule,
    // SidebarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule
  ]
})
export class SharedModule { }
