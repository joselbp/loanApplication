import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumericMask]'
})
export class AlphanumericMaskDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event'])
  @HostListener('keydown', ['$event'])
  @HostListener('keyup', ['$event'])
  @HostListener('mousedown', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('select', ['$event'])
  @HostListener('contextmenu', ['$event'])
  @HostListener('drop', ['$event'])
  onInputChange(event:any) {
    const initalValue = this._el.nativeElement.value;

    if ( /^[0-9a-zA-ZñÑáíóúéüäëïö\s]*$/.test(initalValue) ) {
      this._el.nativeElement.oldValue = this._el.nativeElement.value;
      this._el.nativeElement.oldSelectionStart = this._el.nativeElement.selectionStart;
      this._el.nativeElement.oldSelectionEnd = this._el.nativeElement.selectionEnd;
      event.stopPropagation();
    } else if (this._el.nativeElement.hasOwnProperty('oldValue')) {
      this._el.nativeElement.value = this._el.nativeElement.oldValue;
      this._el.nativeElement.setSelectionRange(this._el.nativeElement.oldSelectionStart, this._el.nativeElement.oldSelectionEnd);
      event.stopPropagation();
    } else {
      this._el.nativeElement.value = '';
      event.stopPropagation();
    }

  }

}
