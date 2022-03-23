import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation= false;
//v8 1. variable um die gezogene Karte anzuzeigen
currentCard: string = ''; 
 //v7 3.
  //v7 3.
  game: Game;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  //v7 2.funktion
  newGame() {
    //v7. 4. neues json objekt wird erstellt
    this.game= new Game();
    console.log(this.game)

  }

  // karte auswählen
  takeCard(){
    //v8 2. pop gibt den letzten wert aus dem array wieder und entfernt es vom stapel
    this.currentCard = this.game.stack.pop();  
      console.log(this.currentCard)
    this.pickCardAnimation =true;

  }

}
