import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  //creo delle proprietà
  allowNewServer = false;
  serverCreationStatus = 'Nessun server è stato creato';
  serverName = 'Nuovo Server';
  serverCreated = false;

  servers = ['TestServe1', 'TestServer2'];

//viene eseguito al momento della creazione del component
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
   }

//viene eseguito al momento della lettura del template del component
  ngOnInit(): void {
  }



  onCreaServer(){
    let newTestServer = 'TestServer3';
    this.serverCreationStatus = 'Hai appena creato il seguente server ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(newTestServer);
  }

  newServer = '';
  onModificaServer(event: any){
    console.log(event);
    console.log(event.target.value);
    // this.newServer = event.target.value;

    this.newServer = (<HTMLInputElement>event.target).value
  }


  serverName2 = 'Pippo'
}
