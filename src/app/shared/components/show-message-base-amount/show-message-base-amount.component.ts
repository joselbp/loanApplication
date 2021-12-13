import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoanInterface } from 'src/app/pages/loan/models/interfaces/loan.interface';
import { UserInterface } from '../../../pages/loan/models/interfaces/user.interface';
import {environment} from '../../../../environments/environment'
import { BaseAmountService } from '../../services/base-amount.service';

@Component({
  selector: 'app-show-message-base-amount',
  templateUrl: './show-message-base-amount.component.html',
  styleUrls: ['./show-message-base-amount.component.scss'],

})
export class ShowMessageBaseAmountComponent implements OnInit {
@Input() message:string='Monto disponible: '
  value:number=environment.baseAmount
subscription:any
  constructor(private baseAmountService:BaseAmountService) { }


  ngOnInit(): void {
    this.baseAmountService.emitter.subscribe(res=>{
this.value=res
    })

  }

}

