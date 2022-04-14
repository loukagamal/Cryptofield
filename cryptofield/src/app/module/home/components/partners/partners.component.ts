import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements OnInit {
  partners = [
    { partnersimgurl: 'assets/image/patners-1.svg' },
    { partnersimgurl: 'assets/image/patners-2.svg' },
    { partnersimgurl: 'assets/image/patners-3.svg' },
    { partnersimgurl: 'assets/image/patners-4.svg' },
    { partnersimgurl: 'assets/image/patners-5.svg' },
    { partnersimgurl: 'assets/image/patners-6.svg' },
    { partnersimgurl: 'assets/image/patners-7.svg' },
    { partnersimgurl: 'assets/image/patners-8.svg' },
    { partnersimgurl: 'assets/image/patners-9.svg' },
    { partnersimgurl: 'assets/image/patners-10.svg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
