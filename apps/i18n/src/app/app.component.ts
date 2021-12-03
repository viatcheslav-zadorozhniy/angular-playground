import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Message } from '@angular-playground/api-interfaces';

@Component({
  selector: 'angular-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  greetingMessage = '';
  now = new Date();
  localeId: string;
  // hello$ = this.http.get<Message>('/api/hello');

  constructor(
    // private http: HttpClient,
    @Inject(LOCALE_ID) localeId: string,
  ) {
    this.localeId = localeId;
  }

  ngOnInit(): void {
    const firstName = 'Viatcheslav';
    const lastName = 'Zadorozhniy';

    // https://angular.io/api/localize/init/$localize#description
    // https://angular.io/guide/i18n-common-prepare#mark-text-in-component-code
    this.greetingMessage = $localize`:@@greetingMessage:Glad to see you again, ${firstName} ${lastName}`;
  }

}
