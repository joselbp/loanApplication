import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit, AfterViewInit {


  @ViewChild('componentHolder', { read: ViewContainerRef })
  componentHolder!: ViewContainerRef;
  @Output() closeDialog = new EventEmitter<string>();
  @Output() completeClosed = new EventEmitter<boolean>();
  @Output() customEvent = new EventEmitter<string>();
  @Output() afterInitLoaded = new EventEmitter<boolean>();
  @Input() maxWidth = 500;
  @Input() hidePadding = false;
  show = false;
  // checketSubMargin = {
  //   x: 0,
  //   y: 0
  // }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private _eref: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.afterInitLoaded.emit(true);
    }, 5);
  }

  public open(component: Type<unknown>, data: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.componentHolder.createComponent(componentFactory);
    this.show = true;
    (componentRef.instance as any).data = data;
    if ((componentRef.instance as any).customEvent) {
      (componentRef.instance as any).customEvent.subscribe((res:any ) => {
        this.customEvent.emit(res);
      });
    }

    (componentRef.instance as any).closeDialog.subscribe((res:any ) => {
      this.show = false;
      this.closeDialog.emit(res);
      setTimeout(() => {
        this.completeClosed.emit(true);
        componentRef.destroy();
      }, 300);
    });


    return (componentRef.instance as any);
  }

}
