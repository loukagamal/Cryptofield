import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourt-team',
  templateUrl: './ourt-team.component.html',
  styleUrls: ['./ourt-team.component.scss'],
})
export class OurtTeamComponent implements OnInit {
  teamList = [
    {
      name: 'Vanessa Kirby',
      imgurl: 'assets/image/team-1.svg',
      jop: ' Lead Blockchain',
      description: 'Continually Onceptal Techncally Professionally monezeturk',
      linksocial: [
        { namesocial: 'fa fa-twitter', urlsocial: '#' },
        { namesocial: 'fa fa-behance', urlsocial: '#' },
        { namesocial: 'fa fa-instagram', urlsocial: '#' },
        { namesocial: 'fa fa-vimeo', urlsocial: '#' },
        { namesocial: 'fa fa-linkedin', urlsocial: '#' },
      ],
    },
    {
      name: 'Vanessa Kirby',
      imgurl: 'assets/image/team-2.svg',
      jop: 'CEO Blockchain',
      description: 'Continually Onceptal Techncally Professionally monezeturk',
      linksocial: [
        { namesocial: 'fa fa-twitter', urlsocial: '#' },
        { namesocial: 'fa fa-behance', urlsocial: '#' },
        { namesocial: 'fa fa-instagram', urlsocial: '#' },
        { namesocial: 'fa fa-vimeo', urlsocial: '#' },
        { namesocial: 'fa fa-linkedin', urlsocial: '#' },
      ],
    },
    {
      name: 'Vanessa Kirby',
      imgurl: 'assets/image/team-3.svg',
      jop: 'Lead Blockchain',
      description: 'Continually Onceptal Techncally Professionally monezeturk',
      linksocial: [
        { namesocial: 'fa fa-twitter', urlsocial: '#' },
        { namesocial: 'fa fa-behance', urlsocial: '#' },
        { namesocial: 'fa fa-instagram', urlsocial: '#' },
        { namesocial: 'fa fa-vimeo', urlsocial: '#' },
        { namesocial: 'fa fa-linkedin', urlsocial: '#' },
      ],
    },
    {
      name: 'Vanessa Kirby',
      imgurl: 'assets/image/team-4.svg',
      jop: 'CEO Blockchain',
      description: 'Continually Onceptal Techncally Professionally monezeturk',
      linksocial: [
        { namesocial: 'fa fa-twitter', urlsocial: '#' },
        { namesocial: 'fa fa-behance', urlsocial: '#' },
        { namesocial: 'fa fa-instagram', urlsocial: '#' },
        { namesocial: 'fa fa-vimeo', urlsocial: '#' },
        { namesocial: 'fa fa-linkedin', urlsocial: '#' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
