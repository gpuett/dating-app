import { Pipe, PipeTransform} from '@angular/core';
import { DataService } from './data.service';
import { User } from './user'
@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform{
  transform(items: User[], parameter: string){
    if(!parameter){
      return items;
    }
    let results = [];
    for(var i =0; i<items.length; i++){
      if(parameter === 'bim'){
        if(items[i].orientation === "wfm" || items[i].orientation === 'mfm'){
          results.push(items[i]);
        }
      } else if(parameter === 'biw'){
        if(items[i].orientation ==='mfw' || items[i].orientation === 'wfw'){
          results.push(items[i]);
        }
      } else if (items[i].orientation === parameter){
        results.push(items[i]);
      }
    }
    return results;
  }
  // transform(array:User[], parameter:string){
  //   var output: User[] =[];
  //   for(var i = 0; i< array.length; i++){
  //     if(parameter === 'm4w'){
  //       if(array[i].orientation)
  //     }
  //   }
  // }
}
