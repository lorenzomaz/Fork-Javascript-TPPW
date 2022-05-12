import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server = 'FTP332 Serv';
  serverID = 12;
  statusServer = 'online';

  constructor() { }

  ngOnInit(): void {
  }

}
