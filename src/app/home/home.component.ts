import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  audioUrl = '../../assets/audio/VithuMauli_Track.mp3';
  constructor() {}

  ngOnInit(): void {}
}
