import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-loan',
  templateUrl: './select-loan.component.html',
  styleUrls: ['./select-loan.component.scss'],
})
export class SelectLoanComponent implements OnInit {
  @Output() selectValue=new EventEmitter()
  listValues: any[] = [];
  minValue = 100000;
  maxValue = environment.baseAmount;

  constructor() {}

  ngOnInit(): void {
    this.getOptionsList();
  }
  getOptionsList() {
    for (let i = this.minValue; i <= this.maxValue; i += 100000) {
      this.listValues.push(i);
    }
  }
  setNewValueBaseAmount(value: any) {

    this.selectValue.emit(value)
  }
}
