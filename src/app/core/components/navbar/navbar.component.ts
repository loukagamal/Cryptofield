import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  sitename = 'Cryptofield';
  listnavbar = [
    { nameItem: 'what is ico ', id: 'what' },
    { nameItem: 'Token sale', id: 'token' },
    { nameItem: 'Road map', id: '' },
    { nameItem: 'Apps', id: 'Apps' },
    { nameItem: 'Team', id: 'Team' },
    { nameItem: 'Faqs', id: 'Faqs' },
    { nameItem: 'contact', id: 'contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
