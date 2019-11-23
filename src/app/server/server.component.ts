import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  title = "This is local Server";

  @Input() serverName: string;

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
