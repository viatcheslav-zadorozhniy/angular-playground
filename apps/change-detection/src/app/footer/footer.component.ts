import { AfterContentChecked, ChangeDetectionStrategy, Component, } from '@angular/core';
import { Link } from '../interfaces/link';

@Component({
  selector: 'angular-playground-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements AfterContentChecked {

  links: Link[] = [
    { href: '/link5', text: 'Link 5' },
    { href: '/link6', text: 'Link 6' },
  ];

  ngAfterContentChecked(): void {
    console.count('FooterComponent');
  }

}
