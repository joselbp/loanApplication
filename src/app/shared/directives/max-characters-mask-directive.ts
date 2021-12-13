import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[maxChars]'
})
export class MaxCharactersMaskDirective implements AfterViewInit {

  @Input('maxChars') max: number=50;

  constructor(public el: ElementRef) {
  }

  ngAfterViewInit(): void {

    this.el.nativeElement.onkeydown = (c:any) => {
      // console.log(c)
      if (this.el.nativeElement.value?.length >= this.max &&
        !([8, 46, 39, 37] as any).includes(c.keyCode)) {
        c.preventDefault();
      }
    };

    this.el.nativeElement.onchange = (c:any) => {
      if (this.el.nativeElement.value?.length > this.max) {
        const res = this.el.nativeElement.value.split('');
        res.length = this.max;
        this.el.nativeElement.value = res.join('');
      }
    };
  }


}
