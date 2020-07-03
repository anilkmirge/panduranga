import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'पांडुरंग';
  navBarOpen = false;

  public toggleNavBar() {
    this.navBarOpen = !this.navBarOpen;
  }
}
