import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-game',
  imports: [RouterModule],
  templateUrl: './game.component.html',
  standalone: true,
  styleUrl: './game.component.css'
})
export class GameComponent {
  userName:string = "";
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {
    this.userName = this.userService.getUserName();
  }


}
