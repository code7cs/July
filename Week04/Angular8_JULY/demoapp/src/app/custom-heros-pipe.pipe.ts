import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customHerosPipe'
})
export class CustomHerosPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
