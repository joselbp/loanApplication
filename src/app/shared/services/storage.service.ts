import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  setDataSession(data:any)
  {
    sessionStorage.setItem("DATA_LOAN",JSON.stringify(data))
  }
  getDataSession()
  {
    return JSON.parse(sessionStorage.getItem("DATA_LOAN")||"")
  }
  setNewValueBaseAmount(data:any)
  {
    sessionStorage.setItem("BASE_AMOUNT",JSON.stringify(data))
  }
  getNewValueBaseAmount()
  {
    return JSON.parse(sessionStorage.getItem("BASE_AMOUNT")||"")
  }
}
