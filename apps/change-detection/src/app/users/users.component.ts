import { AfterContentChecked, ChangeDetectionStrategy, Component, } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'angular-playground-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements AfterContentChecked {

  users: User[] = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
  ];

  ngAfterContentChecked(): void {
    console.count('UsersComponent');
  }

}
