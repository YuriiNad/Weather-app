import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frirstLatUpper'
})
export class FrirstLatUpperPipe implements PipeTransform {

  transform(element: string): string {
    return element[0].toUpperCase();
  }

}
