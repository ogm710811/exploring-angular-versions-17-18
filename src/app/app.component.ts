import {AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomComponent} from "./custom/custom.component";
import {CardComponent} from "./card/card.component";
import {COURSES} from "./db-data";
import {DynamicComponent} from "./dynamic/dynamic.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'exploring-version18';
  data = 50;
  systemVolume = 'system volume change'
  courses = COURSES

  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  createNameComponent() {
    const myComp = this.viewContainerRef?.createComponent(DynamicComponent);
    myComp.instance.onNameChange.subscribe((newName: any) => {
      console.log(newName);
    });
  }


  onCourseButtonBubble2() {
    console.log('click event app component')
  }

  onCourseButtonClicked(e: any) {
    console.log('onCourseButtonClicked emitter event:', e)
  }

  ngAfterViewInit(): void {
    this.createNameComponent();
  }
}
