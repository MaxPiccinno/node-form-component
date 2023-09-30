import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  mainForm!: FormGroup;
  lessons!: FormArray;
  attachments!: FormArray;

  ngOnInit(): void {
    this.initForm();
  }

  addLessonSection() {
    (this.mainForm.get('lessons') as FormArray).controls.push(this.initLessonForm());
    this.lessons = this.mainForm.get('lessons') as FormArray;
  }

  addAttachmentControl() {
    (this.mainForm.get('attachments') as FormArray).controls.push(this.initAttachmentControl());
    this.attachments = this.mainForm.get('attachments') as FormArray;
  }

  removeLessonSection(index: number) {
    (this.mainForm.get('lessons') as FormArray).removeAt(index);
    this.lessons = this.mainForm.get('lessons') as FormArray;
  }

  removeAttachmentControl(index: number) {
    (this.mainForm.get('attachments') as FormArray).removeAt(index);
    this.attachments = this.mainForm.get('attachments') as FormArray;
  }

  private initForm() {
    this.mainForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      lessons: new FormArray([this.initLessonForm()]),
      attachments: new FormArray([this.initAttachmentControl()])
    });
    this.lessons = this.mainForm.get('lessons') as FormArray;
    this.attachments = this.mainForm.get('attachments') as FormArray;
  }

  private initLessonForm(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      file: new FormControl<File>(null, [Validators.required])
    })
  }

  private initAttachmentControl(): FormControl {
    return new FormControl<File>(null);
  }

}
