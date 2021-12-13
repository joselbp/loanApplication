import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NUMERIC } from '../../../../../shared/constants/regular-expressions/regular-expressions';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {
  @Input() showIconExit=true
  @Output() closeDialog = new EventEmitter();
listLoans:any[]=[]
  constructor(private formBuilder:FormBuilder) { }
  form: any
  ngOnInit(): void {
    this.formUserCreation()
  }
formUserCreation()
{
this.form= this.formBuilder.group({
  name:[,[Validators.required]],
  email:[,[Validators.email]],
  identification:[,[Validators.required,Validators.pattern(NUMERIC)]],
  value:[0,[Validators.pattern(NUMERIC)]],
  state:[]
})
}
close(e: any = 'close') {
  this.closeDialog.emit(e);
}
setValue(value: any)
{
this.form.controls['value'].setValue(value)
}
confirm() {
  this.setStateLoan()
  this.listLoans=[this.form.value,...this.listLoans]
   this.close(this.listLoans)
  this.form.reset()
}
setStateLoan()
{
  let number=Math.floor(Math.random() * 2)
 this.form.controls['state'].setValue(number===0?'denegado':'aprobado')
}
}
