import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FormPageRoutingModule } from './form-page-routing.module';
import { FormPageComponent } from './form-page.component';


@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    CommonModule,
    FormPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class FormPageModule { }
