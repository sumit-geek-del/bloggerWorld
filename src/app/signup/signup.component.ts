import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationConstants } from '../Constants/validationConstants';
import {checkConfirmPassword} from 'src/app/Services/confirmPassword'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!:FormGroup;
  confirmPassword:boolean = false;

  constructor(private fb:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name:['', [Validators.required, Validators.pattern(ValidationConstants.nameValiadtion)]],
      emailId:['', [Validators.required, Validators.pattern(ValidationConstants.emailValidation)]],
      password:['', [Validators.required, Validators.pattern(ValidationConstants.passwordValidation)]],
      cnfPassword:['', Validators.required]
    })
  }

  signUpFormValue(formValue:FormGroup):void{
    const signUpCredentials = formValue.value;
    console.log(signUpCredentials)
  }
  checkPassword(event:Event):boolean{
    const cnfPassword = (event.target as HTMLInputElement).value;
    this.confirmPassword = checkConfirmPassword(this.signUpForm.get('password')?.value, cnfPassword);
    return this.confirmPassword;

  }

  loginRoute(){
    this._router.navigate([''], {skipLocationChange:true});
  }

}
