import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClick = false;
  number: number[] = [2, 3, 5,8,5,6];
 
  ButtonClick() {
    this.buttonClick = true;
  }



}
