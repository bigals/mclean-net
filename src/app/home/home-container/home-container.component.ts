import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  public welcomeMessage: string;

  constructor () {
    // tslint:disable-next-line: max-line-length
    this.welcomeMessage = `You have found the personal site of Alex McLean! I am a computer engineer from Southeast Michigan, who spends most of his time tinkering on the web these days. This site serves to showcase past and future projects, a white-board for me to jot crazy throughts and findings down on, and above all a learning experience!`;
  }

  ngOnInit() {
  }

}
