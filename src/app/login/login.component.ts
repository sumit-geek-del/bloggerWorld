import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {ValidationConstants} from 'src/app/Constants/validationConstants';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  @ViewChild('emailField') emailInput!:ElementRef
  

  constructor(private fb:FormBuilder, private _router:Router, private _renderer:Renderer2) { }
    

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      emailId:new FormControl('', [Validators.required, Validators.pattern(ValidationConstants.emailValidation)]),
      password:new FormControl('', [Validators.required, Validators.pattern(ValidationConstants.passwordValidation)])
    })
  }

  loginFormValue(formValue:FormGroup):void{
    

    const loginCredentials = formValue.value;
    console.log(loginCredentials);

    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 800,
      timerProgressBar: true,
      showClass: {
        popup: 'animate__animated animate__bounceInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__bounceOutDown'
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    }).then((result)=>{
      if(result.isDismissed){
        this._router.navigate(['layout'], {skipLocationChange:true})
      }
    })

  }

  checkStatus(){
    console.log(this.loginForm)
  }

  signUp(){
    this._router.navigate(['signup'], {skipLocationChange:true})
  }

}
