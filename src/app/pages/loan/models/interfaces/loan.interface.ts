import { UserInterface } from './user.interface';
export interface LoanInterface{
  user?:UserInterface,
  message:string,
  value:number,
  state:string,
}
