/**
 * New typescript file
 */
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
export class GlobalFunctions {

  // the pattern below has not been developed by me, it is a pattern that has been proven to work
  public static readonly emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;;

  static handleError(error) {
    console.error('error occured: ' + error);

  }
  // get the difference between two dates in days with date2 being the bigger date
  static getDateDiff(date1: Date, date2: Date): number {
    var diff = date2.getTime() - date1.getTime();
//    console.log('diff = ' + diff);
    return diff / (1000 * 60 * 60 * 24);

  }

  // receives two arrays of the same size, one for the quantity and another for the amount,
  // does linear, cross multiplication on all of them and returns the total
  static calculateTotal(quantity: Array<number>, amount: Array<number>): number {
    let count = 0;
    quantity.forEach((quan, idx) => {
      count = count + quan * amount[idx];
    });
    return count;

  }

  public static emailValidator(email: FormControl) {



    if (email.value.length <= 5 || !GlobalFunctions.emailPattern.test(email.value)) {

      return {
        emailValidator: {
          valid: false
        }
      };


    } else {
      return null;
    }

  }
}
