import {Injectable} from "@angular/core";
import {VALIDATION_ERROR_MESSAGES} from "../constants/error-messages/validation-error-messages";


@Injectable({
  providedIn: 'root',
})
export class ErrorsService {

  constructor() {

  }

  getValidationErrorMessage(errors:any) {
    const errorsArray= Object.entries(errors);
    const validation:any=VALIDATION_ERROR_MESSAGES ;
    return validation[errorsArray[0][0]] (errorsArray[0][1]) ;
  }

}
