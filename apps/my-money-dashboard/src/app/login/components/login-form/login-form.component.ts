import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  public handleLoginClick(): void {
    this._router.navigate(['pos']);
  }

}
