import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
@Input() arrayLinks:any;
@Input() icon:string='home';
  constructor() { }

  ngOnInit(): void {
  }

}
