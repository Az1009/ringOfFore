
export class Game{
// v7 1.onjekte die gespeichert werden
public players: string[] = [];
public stack: string[] = [];
public playedCards: string[] = [];
public currentPlayer: number = 0;


// v7 
constructor(){
    // v7 6.stack mit allen Karten füllen
    for(let i = 1; i<14; i++){

        this.stack.push('ace_'+i);
        this.stack.push('clubs_'+i);
        this.stack.push('diamonds'+i);
        this.stack.push('hearts'+i);
    }
    shuffle(this.stack);
}
}
// karten  mischen
// karten mischen

function shuffle(array: any) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
