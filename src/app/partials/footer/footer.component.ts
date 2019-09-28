import { Component, OnInit } from "@angular/core";
import { IIconLink } from "../../interfaces/IIconLink";
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  links: IIconLink[] = [
    {
      class: "fab fa-facebook",
      url: "http://facebook.com/anjangozi/",
      target: '_blank'
    },
    {
      class: "fab fa-mixcloud",
      url: "https://www.mixcloud.com/anja-ngozi/",
      target: '_blank'
    },
    {
      class: "fab fa-soundcloud",
      url: "https://soundcloud.com/anja-ngozi",
      target: '_blank'
    },
    {
      class: "fab fa-instagram",
      url: "https://www.instagram.com/anja.ngozi",
      target: '_blank'
    },
    {
      class: "fab fa-tumblr",
      url: "#",
      target: '_blank'
    }
  ];
}
