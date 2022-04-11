import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  documentation = [
    {
      fielname: 'Terms & Conditions',
      fileimgurl: 'assets/image/pdf.svg',
      fileurl: '',
    },
    {
      fielname: 'White Pappers',
      fileimgurl: 'assets/image/pdf.svg',
      fileurl: '',
    },
    {
      fielname: 'Privacy PolicyVanessa Kirby',
      fileimgurl: 'assets/image/pdf.svg',
      fileurl: '',
    },

    {
      fielname: 'Business Profile',
      fileimgurl: 'assets/image/pdf.svg',
      fileurl: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
