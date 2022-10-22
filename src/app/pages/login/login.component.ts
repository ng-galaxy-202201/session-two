import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/*
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class User {
  constructor(public name: string) {
  }
}

const user = new User('Luis')
user.name

 */


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * En Angular 14, el html puede acceder a los elementos protected
   */

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  validate() {
    // http envia las credenciales
    // hacer redireccion
    // domain.com/admin/user
    // domain.com/admin/user/1/profile
    // this.router.navigate(['/admin', 'user', 1, 'profile'])
    this.router.navigateByUrl('/admin')
  }

}
