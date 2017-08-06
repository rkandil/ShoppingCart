import { GlobalFunctions } from '../globals/global-functions';
import { GlobalConstants } from '../globals/globalconstants';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'new'
})
export class NewPipe implements PipeTransform {

  transform(publishDate: string, args?: any): any {
    return GlobalFunctions.getDateDiff(new Date(publishDate), new Date()) <= GlobalConstants.maximumNewDays ? 'New' : '';
  }

}
