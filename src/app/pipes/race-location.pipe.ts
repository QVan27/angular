import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'raceLocation'
})
export class RaceLocationPipe implements PipeTransform {

  // tranform le premier paramètre, les autres param i.e. format de date
  transform(value: string, ...args: unknown[]): string {
    // name => N.A.M.E.
    let res = "";
    for(let i = 0; i < value.length; i++){
      res += value[i].toUpperCase()+".";
    }
    return res;
  }

}
