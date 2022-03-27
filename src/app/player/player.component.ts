import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  //v11. input variable
@Input() name;
//v16 aktiver spieler
@Input() playerActive: boolean= false;

  constructor() { }

  ngOnInit(): void {
  }

}
//function input() {
//  throw new Error('Function not implemented.');
//}

