import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { RECEIVERS } from 'src/_static/receivers.mock';
import { FormFactoryService } from 'src/app/pages/form-page/services/form-factory.service';

@Component({
  selector: 'app-receivers-form',
  templateUrl: './receivers-form.component.html',
  styleUrls: ['./receivers-form.component.scss']
})
export class ReceiversFormComponent {

  @Input() parentForm!: FormGroup;

  receiversList = RECEIVERS;

  constructor(private fb: FormBuilder, private formFactory: FormFactoryService) { }

  get receivers(): FormArray {
    return <FormArray>this.parentForm.get('receivers');
  }

}
