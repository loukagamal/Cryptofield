import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
})
export class TokenComponent implements OnInit {
  token = [
    { name: 'Starting Time', time: 'April 23,2022 (Monday 9:00am)' },
    { name: 'Ending Time', time: 'April 23,2022 (Monday 9:00am)' },
    { name: 'Marcket Caps', time: '$118.23 (Billion)' },
    { name: 'Low -High 24 H:', time: '$6,455.83- $7,071.42' },
    { name: 'Available Token', time: '$120.23 (Billion)' },
    { name: 'Acceptable  Currency', time: 'Btc, Eth, Ltc' },
  ];

  time = [
    { footer: 'Days', body: '10' },
    { footer: 'Hour', body: '24' },
    { footer: 'Minu', body: '60' },
    { footer: 'seco', body: '33' },
  ];

    paymentlist = [
    {
      paymenname: '',
      paymenimgurl: 'assets/image/visa.svg',
      paymenurl: '',
    },
      {
      paymenname: '',
      paymenimgurl: 'assets/image/pament-2.svg',
      paymenurl: '',
    },
      {
      paymenname: '',
      paymenimgurl: 'assets/image/pament-3.svg',
      paymenurl: '',
    },
      {
      paymenname: '',
      paymenimgurl: 'assets/image/pament-4.svg',
      paymenurl: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
