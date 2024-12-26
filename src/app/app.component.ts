import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent{
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
