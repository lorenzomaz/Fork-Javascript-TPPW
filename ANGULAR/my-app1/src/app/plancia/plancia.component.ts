import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-plancia',
  templateUrl: './plancia.component.html',
  styleUrls: ['./plancia.component.css']
})
export class PlanciaComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
   this.serverCreated.emit({
     serverName: this.newServerName,
     serverContent: this.newServerContent
   })
  }

  onAddBlueprint(){

  }
}
