import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sitename = 'Cryptofield';
  listnavbar = [
    { nameItem: 'what is ico ', url: '' },
    { nameItem: 'Token sale', url: '' },
    { nameItem: 'Road map', url: '' },
    { nameItem: 'Apps', url: '' },
    { nameItem: 'Team', url: '' },
    { nameItem: 'Faqs', url: '' },
    { nameItem: 'contact', url: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
