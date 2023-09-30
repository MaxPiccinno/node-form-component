import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormPageRoutingModule } from './form-page-routing.module';
import { FormPageComponent } from './form-page.component';
import { LessonFormComponent } from './components/lesson-form/lesson-form.component';


@NgModule({
  declarations: [
    FormPageComponent,
    LessonFormComponent
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class FormPageModule { }
