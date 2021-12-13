import { Component, Input, OnInit } from '@angular/core';
import { TableInterface } from 'src/app/pages/loan/models/interfaces/table.interface';
import { BaseAmountService } from '../../services/base-amount.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  dataTable: any[] = [];
  headers: any;
  constructor(
    private serviceStorage: StorageService,
    private baseAmountService: BaseAmountService
  ) {}

  ngOnInit(): void {
    console.log(this.serviceStorage.getDataSession());
    // this.baseAmountService.setBaseAmount(this.serviceStorage.getNewValueBaseAmount())
    this.dataTable = this.serviceStorage.getDataSession();
    this.setHeaders();
  }
  setHeaders() {
    this.headers = Array.from(
      new Set(
        this.dataTable
          .map((dt) => Object.keys(dt))
          .reduce((ok, n) => (ok = [...ok, ...n]), [])
      )
    );
  }
  isNan(data: any) {
    if (new Date(data)) {
      return true;
    } else return isNaN(data);
  }
  collect(ind: any,item:any) {
    this.dataTable = this.dataTable.map((res, index) => {
      if (index === ind) {
        res = { ...res, state: 'pagado' };
      }
      return res;
    });
    this.baseAmountService.setBaseAmount(item.value)
    this.serviceStorage.setDataSession(this.dataTable)
    this.serviceStorage.setNewValueBaseAmount(this.baseAmountService.getBaseAmount())
  }
}
