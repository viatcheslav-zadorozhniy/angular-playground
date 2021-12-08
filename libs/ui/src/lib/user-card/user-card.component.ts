import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@angular-playground/api-interfaces';

@Component({
  selector: 'angular-playground-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent {

  @Input() user?: User;

  constructor() { }

}
