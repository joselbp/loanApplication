import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
requestLoan:any=[]

  constructor(private serviseStorage:StorageService) { }

  ngOnInit(): void {

  }
async setDataRequestLoans(event:any)
{

  this.serviseStorage.setDataSession(event)
}

}
