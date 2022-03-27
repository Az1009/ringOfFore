import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent implements OnInit {
  // variable aus d.a.p.comp.html definiert
  name: string= "";

  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){

  }

}
