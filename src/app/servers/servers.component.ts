import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  newServerName: string = '';

  isServerCreated: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onCreateServer(){
    this.isServerCreated = true;
  }

}
