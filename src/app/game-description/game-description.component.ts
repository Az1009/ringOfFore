import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit, OnChanges {
  /* v18 Spielfragen anzeigen json für die spielregeln */
  cardAction=[
    {title: 'Wasserfall', description: 'Alle trinken zusammen, wer zuletzt aufhört gewinnt'},
    { title: 'Du', description: 'Du entscheidest wer trinkt.'},
    { title: 'Ich', description: 'Ich trinke!'},
    { title: 'Frauen', description: 'Alle Frauen trinken jetzt!'},
    { title: 'Tanzen', description: 'Spieler tanzt während er trinkt.'},
    { title: 'Frage', description: 'Du beantwortest die gestellte Frage und trinkst danach.'},
    { title: 'Letzter Spieler', description: 'Der letzte Spieler trinkt jetzt.'},
    { title: 'Denk dir was aus', description: 'Du darfst entscheiden wer was macht.'},
    { title: 'Kopfstand', description: 'Du trinkst im Kopfstand.'},
    { title: 'Strohhalm', description: 'Du trinkst mit einem Strohhalm.'},
    { title: 'Rauchen', description: 'Du musst nach dem trinken eine rauchen.'},
    { title: 'Wahrheit', description: 'Nachdem du die gestellte Frage wahrheitsgeträu beantwortet hast, trinkst du los.'},
    { title: 'Aussetzen', description: 'Du musst eine Runde aussetzen.'},

  ];
  //v18 2. variable anlegen
  title: string= '';
  description ='';
  // v18 3.input variable wo die aktuelle Karte angezeigt wird
  @Input() card: string;

  constructor() { }

  ngOnInit(): void {
  }
  //wird immer aufgerufen, wenn sich die karte ämdert
  ngOnChanges(): void{

// nur ausführen, wenn die Karte bereits existiert
if(this.card){
  
    console.log('current card is:', this.card);
    //Kartennamen teilen in der console string in eine Zahl durch + umwandeln
    let cardNumber=  +this.card.split('_')[1];
// kartentitel anzeigen an der stelle -1, weil array immer bei 0 anfängt
    this.title= this.cardAction[cardNumber -1].title;
    this.description= this.cardAction[cardNumber -1].description;


}}}



  
