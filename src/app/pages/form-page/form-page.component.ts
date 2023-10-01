import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RECEIVERS } from 'src/_static/receivers.mock';
import { Receiver } from 'src/app/core/models/receiver.model';
import { FormFactoryService } from 'src/app/pages/form-page/services/form-factory.service';

enum FormResult {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Default = 'DEFAULT'
}

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  mainForm!: FormGroup;

  receiversList = RECEIVERS;
  showResult = FormResult.Default;

  //in order to make it usable in the template
  readonly FormResult = FormResult;

  constructor(private fb: FormBuilder, private formFactory: FormFactoryService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  get name() {
    return <FormControl>this.mainForm.get('name');
  }

  get receivers() {
    return <FormArray>this.mainForm.get('receivers');
  }

  submitForm() {
    this.mainForm.markAllAsTouched();

    const valid = this.receiversValid() && this.mainForm.valid;

    if (!this.receiversValid()) {
      this.receivers.setErrors({ 'empty': true })
    }

    this.showResult = valid ? FormResult.Success : FormResult.Failure;

    //hide feedback message after 2 seconds
    setTimeout(() => {
      this.showResult = FormResult.Default
    }, 2_000)

  }

  resetForm() {
    this.initForm();
  }


  private initForm() {
    this.mainForm = this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      lessons: this.fb.array([this.formFactory.initLessonForm()]),
      attachments: this.fb.array([this.formFactory.initAttachmentForm()]),
      receivers: this.fb.array([...this.initReceiversControls()])
    });
  }


  private initReceiversControls(): FormGroup[] {
    return this.receiversList.map((item) => {
      return this.fb.group({
        name: this.fb.control(item),
        checked: this.fb.control<boolean>(false),
        deadline: this.fb.control<Date | null>(null)
      })
    })
  }

  private receiversValid(): boolean {
    const checkedReceivers = (this.receivers.value as Receiver[]).filter((item) => item.checked);
    return !!checkedReceivers.length
  }


}
