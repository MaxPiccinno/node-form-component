import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RECEIVERS } from 'src/_static/receivers.mock';
import { FormFactoryService } from 'src/app/pages/form-page/services/form-factory.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  mainForm!: FormGroup;

  receiversList = RECEIVERS;

  constructor(private fb: FormBuilder, private formFactory: FormFactoryService) {
  }

  ngOnInit(): void {
    this.initForm();
  }


  get receivers(): FormArray {
    return <FormArray>this.mainForm.get('receivers');
  }

  submitForm() {
    console.log(this.mainForm.value);
  }

  resetForm() {
    this.mainForm.reset();
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
        deadline: this.fb.control<Date>(null)
      })
    })
  }

}
