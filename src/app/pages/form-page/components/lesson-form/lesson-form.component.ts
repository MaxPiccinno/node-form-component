import { Component, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-lesson-form',
  templateUrl: './lesson-form.component.html',
  styleUrls: ['./lesson-form.component.scss']
})
export class LessonFormComponent {

  constructor(@SkipSelf() public controlContainer: ControlContainer) { }

}
