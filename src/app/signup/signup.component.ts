import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!:FormGroup

  constructor(private fb:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name:['', Validators.required],
      emailId:['', Validators.required],
      password:['', Validators.required],
      cnfPassword:['', Validators.required]
    })
  }

  signUpFormValue(formValue:FormGroup):void{
    const signUpCredentials = formValue.value;
    console.log(signUpCredentials)
  }

  loginRoute(){
    this._router.navigate([''], {skipLocationChange:true});
  }

}
