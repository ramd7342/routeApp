import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() {
    console.log("constructor in info");
   }

  ngOnInit() {
    console.log("ngOnint in info");
  }

}
