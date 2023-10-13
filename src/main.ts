import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgxSmoothDnDModule} from "ngx-smooth-dnd";
import { SharedModule } from './shared/shared/shared.module';


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, NgxSmoothDnDModule, SharedModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <p> Welcome to task management app made by <em><a href="https://www.github.com/din-s">Din-s</a></em></p>
    <app-board></app-board>
  `,
})
export class App {
  name = 'Dinesh';
}

bootstrapApplication(App);
