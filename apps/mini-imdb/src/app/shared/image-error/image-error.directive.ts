import {Directive, Input, HostBinding} from '@angular/core'
@Directive({
  selector: 'img[fallback]',
  host: {
    '(error)':'updateUrl()',
    '(load)': 'load()',
    '[src]':'src'
  }
})

export class ImageErrorDirective {
  @Input() src:string;
  @Input() fallback:string;
  @HostBinding('class') className;
  updateUrl() {
    this.src = this.fallback;
  }
  load(){
    this.className = 'image-loaded';
  }
}
