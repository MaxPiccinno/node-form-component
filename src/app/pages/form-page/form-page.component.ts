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

  private initForm() {
    this.lessons = new FormArray([this.initLessonForm()]);
    this.mainForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      lessons: this.lessons
    })
  }

  private initLessonForm(): FormGroup {
    return new FormGroup({
      name: new FormControl<string>('', [Validators.required])
    })
  }

}
