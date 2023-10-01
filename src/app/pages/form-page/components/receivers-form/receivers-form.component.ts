import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-receivers-form',
  templateUrl: './receivers-form.component.html',
  styleUrls: ['./receivers-form.component.scss']
})
export class ReceiversFormComponent {

  @Input() parentForm!: FormGroup;

  get receivers(): FormArray {
    return <FormArray>this.parentForm.get('receivers');
  }

}
