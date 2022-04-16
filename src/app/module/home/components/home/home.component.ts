import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    time = [  
    { footer: "Days", body: '10' },
    { footer: "Hour", body: '24'},
    { footer: "Minu", body: '60' },
    { footer: "seco", body: '33' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
