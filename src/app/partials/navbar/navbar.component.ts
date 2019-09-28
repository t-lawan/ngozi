import { Component, OnInit } from '@angular/core';
import { IHeader } from 'src/app/interfaces/IHeader';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  headers :IHeader[] = [
    {
      link: '',
      title: '.'
    },
    {
      link: 'project',
      title: 'project'
    },
    {
      link: 'video',
      title: '.'
    },
    {
      link: 'contact',
      title: 'contact'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
