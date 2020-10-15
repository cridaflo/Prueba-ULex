import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Setting of a login flag and routing to products view
   */
  login() {
    localStorage.setItem('logedIn', 'True');
    this.router.navigate(['productos']);
  }

}
