import { Component, OnInit } from '@angular/core';
import { IHomeLink } from 'src/app/interfaces/IHomeLink';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links: IHomeLink[] = [
    {
      image_url: '/assets/images/dj.jpg',
      title: 'dj',
      url: 'https://www.mixcloud.com/anja-ngozi/',
      target: '_blank'
    },
    {
      image_url: '/assets/images/follow.jpg',
      title: 'follow',
      url: 'https://www.instagram.com/ngz_00_/',
      target: '_blank'
    },
    {
      image_url: '/assets/images/video.jpg',
      title: 'videos',
      url: '/video',
      target: '_self'
    },
    {
      image_url: '/assets/images/radio.jpg',
      title: 'radio',
      url: 'https://worldwidefm.net/filter/global-roots/',
      target: '_blank'
    },
  ]
  constructor() { }
  ngOnInit() {
  }
}
