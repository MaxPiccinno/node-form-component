import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormFactoryService } from 'src/app/pages/form-page/services/form-factory.service';

@Component({
  selector: 'app-attachment-form',
  templateUrl: './attachment-form.component.html',
  styleUrls: ['./attachment-form.component.scss']
})
export class AttachmentFormComponent {

  @Input() parentForm!: FormGroup;

  constructor(private fb: FormBuilder, private formFactory: FormFactoryService) { }

  get attachments(): FormArray {
    return <FormArray>this.parentForm.get('attachments');
  }

  addAttachmentControl() {
    this.attachments.push(this.formFactory.initAttachmentForm());
  }

  removeAttachmentControl(index: number) {
    this.attachments.removeAt(index);
  }

}
