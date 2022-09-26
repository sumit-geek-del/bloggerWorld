import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mode:string = 'Dark'

  constructor() { }

  ngOnInit(): void {
  }

  changeMode(event:any):void{
    if(event.checked==true){
      this.mode = 'Light'
    }
    else{
      this.mode = 'Dark'
    }
  }
}
