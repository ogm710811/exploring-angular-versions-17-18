import {booleanAttribute, Component, Input, numberAttribute, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
  @Input() value = 0;
  title = 'exploring-version18';

  /*** 1.  the required option to enforce that a given input must always have a value ***/
  // @Input({required: true}) value1 = 0;

  /*** 2.  transform function to change the value of an input when it's set by Angular. ***/
  @Input({transform: trimString}) label = '';

  /*** 3.  type checking ***/
  @Input({transform: appendPx}) widthPx: string = '';

  /*** 3.  Built-in transformations  ***/
  @Input({transform: booleanAttribute}) disabled = false;
  @Input({transform: numberAttribute}) number = 0;
  protected readonly onkeyup = onkeyup;

  onkeyUpEvent(value: string) {
    this.title = value
  }
}

function trimString(value: string | undefined) {
  return value?.toUpperCase() ?? '';
}

function appendPx(value: number) {
  return `${value}px`;
}
