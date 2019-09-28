import { Component, OnInit } from '@angular/core';
import { IIconLink } from 'src/app/interfaces/IIconLink';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  showContactIcons: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  private links: IIconLink[] = [
    {
      class: "fab fa-instagram",
      url: "https://www.instagram.com/ngz_00_/",
      target: '_blank'
    },
    {
      class: "far fa-envelope",
      url: "#",
      target: '_blank'
    }
  ];
  
  toggleContactIcons = () => {
    this.showContactIcons = !this.showContactIcons;
  };

}
