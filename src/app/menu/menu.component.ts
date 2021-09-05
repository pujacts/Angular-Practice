import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isValidUserLogin : boolean = false;
  constructor(
    public hardCodedAuthenticationService: HardcodedAuthenticationService) 
    { }

  ngOnInit(): void {

    this.isValidUserLogin = this.hardCodedAuthenticationService.isValidUserLogin();
  }

}
