import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
@Input()title:string=''
@Input()optionsList:any[]=[]
@Output() emmiter=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
