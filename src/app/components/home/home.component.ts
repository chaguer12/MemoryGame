import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {UserService} from '../../service/user.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true
})
export class HomeComponent {
  userName: string  = '';

  constructor(private UserService:UserService,private router:Router) {
  }

  startGame():void {
    if(this.userName){
      this.UserService.setUserName(this.userName);
      this.router.navigate(['/game']);
    }else {
      alert('Please enter your name!');
    }
  }

}
