import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@angular-playground/api-interfaces';

@Component({
  selector: 'angular-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  greetingMessage = '';
  now = new Date();
  user?: User;

  constructor() {}

  ngOnInit(): void {
    // User data can be fetched from API
    const user: User = {
      firstName: 'Viatcheslav',
      lastName: 'Zadorozhniy',
      gender: 'male',
      email: 'viatcheslav.zadorozhniy@gmail.com',
    };

    this.user = user;

    // https://angular.io/api/localize/init/$localize#description
    // https://angular.io/guide/i18n-common-prepare#mark-text-in-component-code
    this.greetingMessage = $localize`:@@greetingMessage:Glad to see you again, ${user.firstName} ${user.lastName}`;
  }

}
