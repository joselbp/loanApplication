import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansRequestedComponent } from './components/loans-requested/loans-requested.component';

const routes: Routes = [
  {path:'',children:[
    {path:'', component:LoansRequestedComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRequestedRoutingModule { }
