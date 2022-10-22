import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session-two';
  id = 1;
  loading = false;

  constructor(private route: Router) {
    this.route.events
      .pipe(
        filter(event => event instanceof NavigationStart || event instanceof NavigationEnd)
      )
      .subscribe(event => {
        this.loading = (event instanceof NavigationStart)
      })
  }
}
