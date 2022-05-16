import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server = 'FTP332 Serv';
  serverID = 12;
  statusServer = '';

  constructor() { }

  ngOnInit(): void {
    //voglio cambiare lo status del server in modo Random
    //operatore ternario
    // this.statusServer = Math.random() > 0.5 ? 'online' : 'offline';
    let numRand = Math.random();
    if(numRand > 0.5){
      this.statusServer = 'online';
    }else{
      this.statusServer = 'offline';
    }

  }


  getServerStatus(){
    return this.statusServer
  }



}
