import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  // router um auf eine weitere seite weitergeleitet zu werden
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //startGame
  newGame(){
    this.router.navigateByUrl('/game');

  }

}
