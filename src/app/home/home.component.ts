import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public welcomeMessage: string;

  constructor () {
    this.welcomeMessage = 'You have found the personal site of Alex McLean!' +
      'I am a computer engineer from Southeast Michigan, who spends most of his time tinkering on the web these days.' +
      'This site serves to showcase past and future projects, ' +
      'a white-board for me to jot crazy throughts and findings down on, ' +
      'and above all a learning experience!';
  }

  ngOnInit() {
  }

}
