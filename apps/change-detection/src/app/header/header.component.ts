import { AfterContentChecked, ChangeDetectionStrategy, Component, } from '@angular/core';
import { Link } from '../interfaces/link';

@Component({
  selector: 'angular-playground-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterContentChecked {

  links: Link[] = [
    { href: '/link1', text: 'Link 1' },
    { href: '/link2', text: 'Link 2' },
  ];

  ngAfterContentChecked(): void {
    console.count('HeaderComponent');
  }

}
