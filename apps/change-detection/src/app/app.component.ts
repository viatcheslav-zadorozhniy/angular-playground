import { AfterContentChecked, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'angular-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterContentChecked {

  ngAfterContentChecked(): void {
    console.count('AppComponent');
  }

}
