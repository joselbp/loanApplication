import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseAmountService } from 'src/app/shared/services/base-amount.service';

@Component({
  selector: 'app-loans-requested',
  templateUrl: './loans-requested.component.html',
  styleUrls: ['./loans-requested.component.scss']
})
export class LoansRequestedComponent implements OnInit {
  @Output() closeDialog = new EventEmitter();
  constructor(private baseAmountService:BaseAmountService) { }

  ngOnInit(): void {

  }

}
