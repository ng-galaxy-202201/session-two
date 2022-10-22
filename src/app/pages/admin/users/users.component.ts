import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const colors: Map<number, string> = new Map([
  [1, 'green'],
  [2, 'blue'],
])

colors.get(1) // green
colors.get(2) // blue
colors.get(3) // undefined

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    { name: 'Luis', id: 1 },
    { name: 'Juan', id: 2 },
    { name: 'Pedro', id: 3 },
    { name: 'Jorge', id: 4 },
  ]

  ngOnInit(): void {
  }

}
