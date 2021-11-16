import { AbstractControl } from '@angular/forms';
import { UserService } from '../service/user/user.service';
import { map } from 'rxjs/operators';
  
export class MyValidations {
  
  static isYounger(control: AbstractControl) {
    const value = control.value;
    if (value < 18) {
      return { isYounger: true };
    }
    return null;
  }

  static validateEmail(userService: UserService) {
    return (control: AbstractControl) => {
      const value = control.value;
      return userService.checkEmail(value)
        .pipe(
        map(Response => {
          return Response.isEmailAvailable ? null : { notAvailable: true };
          
        })
      )
    };
  
  }


}