import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseAmountService {
  @Output()emitter=new EventEmitter()
baseAmount:number=0
  constructor() { }

  setBaseAmount(amount:number)
  {
    environment.baseAmount=environment.baseAmount-amount
    this.baseAmount=environment.baseAmount
    this.emitter.emit(this.baseAmount)
  }
  getBaseAmount()
  {
    return this.baseAmount
  }
}
