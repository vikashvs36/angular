import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  addServerBtn: boolean = false;

  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      this.addServerBtn = true;
    }, 2000);
  }

}
