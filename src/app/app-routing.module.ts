import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[

  {path:'home',loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)},
  {path:'loan',loadChildren:()=>import('./pages/loan/loan.module').then(m=>m.LoanModule)},
  {path:'loans_requested',loadChildren:()=>import('./pages/loan-requested/loan-requested.module').then(m=>m.LoanRequestedModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
