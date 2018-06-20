import { Pipe, PipeTransform} from '@angular/core';
import { DataService } from './data.service';
import { User } from './user'
@Pipe({
  name: 'reject',
  pure: false
})

export class FilterPipe implements PipeTransform{
  transform(items: User[], rejected:boolean){
    
}
