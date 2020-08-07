import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customHerosPipe'
})
export class CustomHerosPipePipe implements PipeTransform {

  transform(value: string, Id: number): string {
    return value + " #Rank " + Id.toString();
  }

}
