import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RECEIVERS } from 'src/_static/receivers.mock';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  mainForm!: FormGroup;

  receiversList = RECEIVERS;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  get lessons(): FormArray {
    return <FormArray>this.mainForm.get('lessons');
  }

  get attachments(): FormArray {
    return <FormArray>this.mainForm.get('attachments');
  }

  get receivers(): FormArray {
    return <FormArray>this.mainForm.get('receivers');
  }

  submitForm() {
    console.log(this.mainForm.value);
  }

  addLessonSection() {
    this.lessons.push(this.initLessonForm());
  }

  addAttachmentControl() {
    this.attachments.push(this.initAttachmentForm());
  }

  removeLessonSection(index: number) {
    this.lessons.removeAt(index);
  }

  removeAttachmentControl(index: number) {
    this.attachments.removeAt(index);
  }

  private initForm() {
    this.mainForm = this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      lessons: this.fb.array([this.initLessonForm()]),
      attachments: this.fb.array([this.initAttachmentForm()]),
      receivers: this.fb.array([...this.initReceiversControls()])
    });
  }

  private initLessonForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      file: this.fb.control<File>(null, [Validators.required])
    })
  }

  private initAttachmentForm(): FormGroup {
    return this.fb.group({
      file: this.fb.control(null)
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
