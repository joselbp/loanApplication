import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanComponent } from './components/loan/loan.component';
import { UserCreationComponent } from './components/loan/user-creation/user-creation.component';
import { SharedModule } from '../../shared/shared.module';
import { SelectLoanComponent } from './components/loan/user-creation/select-loan/select-loan.component';



@NgModule({
  declarations: [
    LoanComponent,
    UserCreationComponent,
    SelectLoanComponent,

  ],
  imports: [
    CommonModule,
    LoanRoutingModule,
    SharedModule,

  ],
  exports:[
    LoanComponent,
    UserCreationComponent
  ]

})
export class LoanModule { }
