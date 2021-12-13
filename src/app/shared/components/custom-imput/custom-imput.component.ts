import { Component, OnInit, Input, forwardRef, ViewChild, Output, EventEmitter } from "@angular/core";
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from "@angular/forms";


@Component({
  selector: 'app-custom-imput',
  templateUrl: './custom-imput.component.html',
  styleUrls: ['./custom-imput.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomImputComponent),
      multi: true,
    },
  ],
})
export class CustomImputComponent  implements OnInit, ControlValueAccessor {
  @ViewChild("input")
  input: HTMLElement | undefined;
  @Input() label: string = "";
  @Input()
  control: FormControl = new FormControl;
  @Input() maxChars = 10000;
  @Input() height = 34;
  @Input() width = 100;
  @Input() type = 'text';
  @Output() emitter = new EventEmitter()
  focused = false;
  value: string ="";
  isDisabled!: boolean;
  errors: ValidationErrors | null | undefined;

  onChange = (_: any) => { };
  onTouch = () => { };

  constructor() { }

  ngOnInit(): void {
    this.focused = this.type === 'date';
    this.control.statusChanges.subscribe((change: any) => {
      this.errors = this.control.errors;
    });
  }

  onInput(value: any) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
    this.emitter.emit(value)
  }

  writeValue(value: any): void {
    this.value = value || "";
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  setFocused(b: any) {
    // console.log('focused: ', b);
    this.focused = b;
  }

  getLabelColor() {
    return this.errors ? "red" : this.focused ? "#005F9F" : "#AAAAAA";
  }

}
