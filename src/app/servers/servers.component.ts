import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServerBtn: boolean = false;

  createServerStaus = 'Server is not created';

  newServerName: string = 'testServer';

  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      this.addServerBtn = true;
    }, 2000);
  }

  onCreateServer() {
    this.createServerStaus = 'Server is created';
  }

  onUpdateServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  }

}
