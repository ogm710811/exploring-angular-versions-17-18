import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../model/course";
import {NgOptimizedImage} from "@angular/common";
import {AppCardStyles} from "../model/app-card-styles";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({required: true}) styles: AppCardStyles | undefined;
  @Input({required: true}) index: number | undefined;
  @Input({required: true}) course: Course | undefined;
  @Output() onCourseButtonClicked = new EventEmitter<Course>();

  onCourseButtonBubble() {
    console.log('click event card component');
    // this.onCourseButtonClicked.emit('button clicked')
  }

  onCourseButton() {
    console.log('emit click event card component');
    this.onCourseButtonClicked.emit(this.course)
  }
}
