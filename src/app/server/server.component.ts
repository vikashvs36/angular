import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  title = "This is local Server";

  serverId: number = 101;

  serverStatus: string = 'Offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit() {
  }

  getServerColor(): string {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}
