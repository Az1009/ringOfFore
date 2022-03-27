import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

import { MatDialog } from '@angular/material/dialog';

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

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  //v7 2.funktion
  newGame() {
    //v7. 4. neues json objekt wird erstellt
    this.game= new Game();
    //console.log(this.game)

  }

  // karte auswählen
  takeCard(){
    if (!this.pickCardAnimation){
    //v8 2. pop gibt den letzten wert aus dem array wieder und entfernt es vom stapel
    this.currentCard = this.game.stack.pop();  
     // console.log(this.currentCard)
    this.pickCardAnimation =true;
    console.log('new card', this.currentCard);

    console.log('game is', this.game);

    // v19 1. nächsten spieler makieren
    this.game.currentPlayer++;
    // v19 2.damit spieler nicht auslaufen aus dem bild
    this.game.currentPlayer= this.game.currentPlayer % this.game.players.length;

    setTimeout(()=>{
      this.game.playedCards.push(this.currentCard);

      this.pickCardAnimation= false;

    },1000);

  }

}

// aus AngularMAterial Dialogfenster
openDialog(): void {
  const dialogRef = this.dialog.open(DialogAddPlayerComponent) ;
    
/* spielerNamen hinzufügen */
dialogRef.afterClosed().subscribe((name: string) => {
  if(name && name.length > 0){
this.game.players.push(name); 
} 
});
}
}