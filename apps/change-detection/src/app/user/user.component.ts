import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, NgZone } from '@angular/core';
import { User } from '../interfaces/user';
import { getUserHash } from '../utils';

@Component({
  selector: 'angular-playground-user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements AfterContentChecked {

  @Input() user?: User;

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
  ) {}

  @HostListener('click')
  onClick() {
    // this.cdr.detectChanges();
    // this.ngZone.runOutsideAngular(() => {
    //   setTimeout(() => console.log('Hello outside of an Angular.'));
    // });

    // setTimeout(console.log);
    // requestAnimationFrame(console.log);
    // queueMicrotask(console.log);
  }

  ngAfterContentChecked(): void {
    console.count(`UserComponent ${this.user?.name}`);
  }

  getUserHash(user: User): string {
    console.count(`getUserHash ${user.name}`);
    return getUserHash(user);
  }

}
