import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'keys'})
export class KeypipePipe implements  PipeTransform {
  transform(value): any {
    if(!value) return null;
    return Object.keys(value);
  }
}