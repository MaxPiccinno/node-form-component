import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormFactoryService } from 'src/app/pages/form-page/services/form-factory.service';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss']
})
export class LessonFormComponent {

  @Input() parentForm!: FormGroup;

  constructor(private fb: FormBuilder, private formFactory: FormFactoryService) { }

  get lessons(): FormArray {
    return <FormArray>this.parentForm.get('lessons');
  }

  addLessonSection() {
    this.lessons.push(this.formFactory.initLessonForm());
  }

  removeLessonSection(index: number) {
    this.lessons.removeAt(index);
  }

}
