import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };
  title = 'Circles2';
}
