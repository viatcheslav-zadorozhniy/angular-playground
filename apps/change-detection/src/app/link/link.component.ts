import { AfterContentChecked, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link } from '../interfaces/link';

@Component({
  selector: 'angular-playground-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent implements AfterContentChecked {

  @Input() link?: Link;

  ngAfterContentChecked(): void {
    console.count(this.link?.text);
  }

}
