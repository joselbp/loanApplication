import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogsComponent } from 'src/app/shared/components/dialogs/dialogs.component';
import { PATHS_OPTIONS_HOME } from 'src/app/shared/constants/paths/paths';
import { UserCreationComponent } from '../../../loan/components/loan/user-creation/user-creation.component';
import { LoansRequestedComponent } from '../../../loan-requested/components/loans-requested/loans-requested.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('userCreation')dialogUserCreation: DialogsComponent | undefined;
  @ViewChild('loansRequested')dialogLoansRequested: DialogsComponent | undefined
  form: any;
  constructor(private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group(
      {
        title:['']
      }
    )
  }

// goToPage(path:string)
// {
// this.router.navigate([path])
// }
openDialog(name:string)
{
name==='Loan'&&this.dialogUserCreation?.open(UserCreationComponent,{})
name==='Loans requested'&&this.dialogLoansRequested?.open(LoansRequestedComponent,{})
}
getPaths()
{
  return PATHS_OPTIONS_HOME
}
}
