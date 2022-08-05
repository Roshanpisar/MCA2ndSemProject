import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[],args: string): any {
    // if null no array will there
   if (!value) return null;
   if (!args) return value;
  //  convert textbox value tolowercase
    let search=args.toLowerCase();
    return value.filter(flight=>{
      let flightName=flight.flightName.toLowerCase();
      return flightName.indexOf(search) !==-1;
    })
  }
}
