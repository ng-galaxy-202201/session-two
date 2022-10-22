import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { delay, timeout } from 'rxjs/operators';
import { UserInfo } from 'src/app/interfaces/user-info.interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username = '';
  loading = false;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((res: any) => this.username = res.userInfo.username)
  }

  ngOnInit(): void {
    // llamada http
/*     this.http.get('domain/api/user/id')
      .subscribe() */

/*     this.loading = true;
    of({ username: 'Luis' })
      .pipe(delay(3000))
      .subscribe((res) => {
        this.loading = false;
        this.username = res.username
      }) */
  }

}
