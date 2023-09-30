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

  ngOnInit(): void {
    this.initForm();
  }

  addLessonSection() {
    (this.mainForm.get('lessons') as FormArray).controls.push(this.initLessonForm());
    this.lessons = this.mainForm.get('lessons') as FormArray;
  }

  removeLessonSection(index: number) {
    (this.mainForm.get('lessons') as FormArray).removeAt(index);
    this.lessons = this.mainForm.get('lessons') as FormArray;
  }

  private initForm() {
    this.mainForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      lessons: new FormArray([this.initLessonForm()])
    });
    this.lessons = this.mainForm.get('lessons') as FormArray;
  }

  private initLessonForm(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      file: new FormControl<File>(null, [Validators.required])
    })
  }

}
