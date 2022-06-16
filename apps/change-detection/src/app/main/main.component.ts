import { AfterContentChecked, ChangeDetectionStrategy, Component, } from '@angular/core';

@Component({
  selector: 'angular-playground-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements AfterContentChecked {

  ngAfterContentChecked(): void {
    console.count('MainComponent');
  }

}
