import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private santizer: DomSanitizer) {}
  transform(url: string) {
    console.log('url', url);
    const safeUrl =  this.santizer.bypassSecurityTrustResourceUrl(url);
    console.log('safeUrl', safeUrl)
    return safeUrl;
  }

}
