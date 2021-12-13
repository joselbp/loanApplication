import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRequestedRoutingModule } from './loan-requested-routing.module';
import { LoansRequestedComponent } from './components/loans-requested/loans-requested.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoansRequestedComponent
  ],
  imports: [
    CommonModule,
    LoanRequestedRoutingModule,
    SharedModule

  ]
})
export class LoanRequestedModule { }
