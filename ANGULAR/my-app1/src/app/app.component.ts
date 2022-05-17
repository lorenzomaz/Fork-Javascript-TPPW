import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app1';

  serverElements = [
    {
      type: "Server",
      name: "Prova",
      content: "Questo è un server di prova"
    },
    {
      type: "Blueprint",
      name: "Prova",
      content: "Questo è un server di prova"
    }
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    console.log(serverData);
    this.serverElements.push({
      type: "Server",
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }
}
