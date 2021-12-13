import {AfterViewInit, Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {FormControl} from "@angular/forms";
import { ErrorsService } from '../services/errors.service';


@Directive({
  selector: '[customInput]'
})
export class CustomInputDirective implements AfterViewInit {

  @Input('customInput')
  control: FormControl = new FormControl;
  div: any;
  text: any;

  constructor(public el: ElementRef,
              private renderer: Renderer2,
              public errorsService: ErrorsService) {
  }

  ngAfterViewInit(): void {
    this.control.statusChanges.subscribe(change => {
      try {
        this.renderer.removeChild(this.el.nativeElement, this.div);
        this.renderer.removeClass(this.el.nativeElement, 'error-input');

      } catch (e) {
      }
      if (this.control.errors) {
        this.addError();
      }
    });
  }

  addError() {
    this.div = this.renderer.createElement('div');
    this.text = this.renderer.createText(this.errorsService.getValidationErrorMessage(this.control.errors));
    // this.renderer.addClass(this.div, 'error-text');
    this.renderer.addClass(this.div, 'tooltip');
    this.renderer.addClass(this.el.nativeElement, 'error-input');
    this.renderer.appendChild(this.div, this.text);
    this.renderer.appendChild(this.el.nativeElement, this.div);
  }


}
