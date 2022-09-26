import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private fb:FormBuilder, private _router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      emailId:['', Validators.required],
      password:['', Validators.required]
    })

  
  }

  loginFormValue(formValue:FormGroup):void{
    const loginCredentials = formValue.value;
    console.log(loginCredentials);

  }

  signUp(){
    this._router.navigate(['signup'], {skipLocationChange:true})
  }

}
