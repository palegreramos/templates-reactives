import { FormControl } from '@angular/forms';

export function NameWineValidator(control: FormControl) {
const nombres = ['Laya', 'K-Naina', 'Verdejo','Monastrell'];

if (nombres.indexOf(control.value)==-1) {
    return { invalidName: ` Must be: ${nombres.toString()}`};
  }
  return null;
}