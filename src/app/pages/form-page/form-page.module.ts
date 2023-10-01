import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TranslateModule } from '@ngx-translate/core';
import { NgLetModule } from 'ng-let';
import { AttachmentFormComponent } from './components/attachment-form/attachment-form.component';
import { LessonFormComponent } from './components/lesson-form/lesson-form.component';
import { ReceiversFormComponent } from './components/receivers-form/receivers-form.component';
import { FormPageRoutingModule } from './form-page-routing.module';
import { FormPageComponent } from './form-page.component';


@NgModule({
  declarations: [
    FormPageComponent,
    LessonFormComponent,
    AttachmentFormComponent,
    ReceiversFormComponent
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgLetModule,
    TranslateModule
  ]
})
export class FormPageModule { }
