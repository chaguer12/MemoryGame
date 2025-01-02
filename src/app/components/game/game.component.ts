import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserService} from '../../service/user.service';
import { InterfaceComponent } from '../interface/interface.component';
import { ScoreComponent } from '../score/score.component';
import { GameOverComponent } from '../game-over/game-over.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [RouterModule,CommonModule,
    InterfaceComponent,
    ScoreComponent,
    GameOverComponent],
  templateUrl: './game.component.html',
  standalone: true,
  styleUrl: './game.component.css'
})
export class GameComponent {
  userName:string = "";
  constructor(public userService:UserService) {
  }
  ngOnInit(): void {
    this.userName = this.userService.getUserName();
  }
  startGame() {
    this.userService.startGame();
  }

  onColorClick(color: string) {
    this.userService.addPlayerInput(color);
  }

  submitSequence() {
    this.userService.submitSequence();
  }

  resetSequence() {
    this.userService.resetPlayerSequence();
  }


}
