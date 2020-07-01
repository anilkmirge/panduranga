import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'पांडुरंग';
  navBarOpen = false;
  audioUrl = '../assets/audio/VithuMauli_Track.mp3';

  public toggleNavBar() {
    this.navBarOpen = !this.navBarOpen;
  }
}
