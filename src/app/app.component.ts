import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName: string  = '';
  startGame():void {
    if(this.userName){
      console.log(`starting game for ${this.userName}`)
    }else{
      console.log("please enter your username!")
    }
  }


}
