import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isServerCreated: boolean = false;

  createdServers: string[] = ['Apache', 'Grassfish'];

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(newServer: HTMLInputElement){
    this.isServerCreated = true;
    this.createdServers.push(newServer.value);
  }

}
