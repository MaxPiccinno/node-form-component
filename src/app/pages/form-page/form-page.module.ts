import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TranslateModule } from '@ngx-translate/core';
import { LessonFormComponent } from './components/lesson-form/lesson-form.component';
import { FormPageRoutingModule } from './form-page-routing.module';
import { FormPageComponent } from './form-page.component';
import { AttachmentFormComponent } from './components/attachment-form/attachment-form.component';


@NgModule({
  declarations: [
    FormPageComponent,
    LessonFormComponent,
    AttachmentFormComponent
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    TranslateModule
  ]
})
export class FormPageModule { }
