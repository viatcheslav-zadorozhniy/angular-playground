import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, } from '@angular/core';
import { Link } from '../interfaces/link';

@Component({
  selector: 'angular-playground-aside',
  templateUrl: './aside.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent implements AfterContentChecked {

  links: Link[] = [
    { href: '/link3', text: 'Link 3' },
    { href: '/link4', text: 'Link 4' },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
  ) {}

  @HostListener('click')
  onClick() {
    // this.cdr.detectChanges();
  }

  ngAfterContentChecked(): void {
    console.count('AsideComponent');
  }

  onHeadingClick(): void {
    // this.cdr.detectChanges();
  }

}
