import {ALPHANUMERIC, NUMERIC, NUMERICDECIMAL} from "../regular-expressions/regular-expressions";

export const VALIDATION_ERROR_MESSAGES = {
  required: (a: any) => 'El campo es requerido',
  repeated: (a: any) => `El nombre "${a}" ya se encuentra en uso`,
  greater: (a: any) => `Debe ser un valor mayor que el valor mínimo`,
  smaller: (a: any) => `Debe ser un valor menor que el valor maximo`,
  maxlength: (requiredLength:any) => ('El maximo número de caracteres permitidos es ' + requiredLength + ' caracteres'),
  pattern: ({actualValue, requiredPattern}:{actualValue:any,requiredPattern:any}) => {
    return requiredPattern == ALPHANUMERIC ? 'Por favor ingrese solo caracteres alfanuméricos'
      : requiredPattern == NUMERIC ? 'Por favor ingrese solo caracteres numericos'
      : requiredPattern == NUMERICDECIMAL ? 'Por favor ingrese solo caracteres numericos enteros o decimales ej: (2.22)'
      :('error en ' + actualValue)
  }
};
