import { Component, OnInit } from "@angular/core";
import { IVideo } from "../../interfaces/IVideo";
import { DomSanitizer } from "@angular/platform-browser";
import { SafePipe } from '../../pipes/safe.pipe';
@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"]
})
export class VideoComponent implements OnInit {
  videos: IVideo[] = [
    {
      title: "Wu-Lu, Lex Amor, Ego Ella May – ‘Legend’",
      link: "https://player.vimeo.com/video/322588360"
    },
    {
      title: "LayFullstop, Moroka, AJ Kwame – ‘Broadcast By Chocolate’",
      link: "https://player.vimeo.com/video/322591093"
    },
    {
      title: "Lord Tusk ft. Roxanne Tataei – ‘Know Ways’",
      link: "https://player.vimeo.com/video/322591841"
    },
    {
      title:
        "Kojey Radical, Shabaka Hutchings – ‘No Gangster’ (Produced by Kz)",
      link: "https://player.vimeo.com/video/322592565"
    },
    {
      title: "Mala, Joe Armon-Jones, Nubya Garcia – ‘Scratch & Erase’",
      link: "https://player.vimeo.com/video/322592792"
    },
    {
      title: "=CoN+KwAkE= – ‘Same Ol Samo’",
      link: "https://player.vimeo.com/video/322592976"
    },
    {
      title: "Maxwell Owin & Coby Sey – ‘Response to Michel’",
      link: "https://player.vimeo.com/video/322611714"
    }
  ];
  // video: IVideo = this.videos[0];
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
}
