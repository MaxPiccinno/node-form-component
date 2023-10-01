import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  constructor(private fb: FormBuilder) { }

  initLessonForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      file: this.fb.control<File | null>(null, [Validators.required],)
    })
  }

  initAttachmentForm(): FormGroup {
    return this.fb.group({
      file: this.fb.control<File | null>(null)
    });
  }
}
