import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  @Output() onNameChange = new EventEmitter<string>();

  changeName(newName: Event) {
    // console.log((newName.target as HTMLInputElement).value);
    this.onNameChange.emit((newName.target as HTMLInputElement).value);
  }
}

