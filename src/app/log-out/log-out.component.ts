import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.hardcodedAuthenticationService.logout();
  }

}
