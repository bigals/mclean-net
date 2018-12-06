import { Component } from '@angular/core';

export interface navBtns {
  label: string;
  route: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title: string;
  public navBtns: navBtns[];

  constructor () {
    this.title = 'bigals-dev';
    this.navBtns = [
      {
        label: 'Home',
        route: '/'
      },
      {
        label: 'About',
        route: '/about'
      },
      {
        label: 'Projects',
        route: '/projects'
      },
      {
        label: 'New Bigals game coming soon!',
        route: ''
      },
      {
        label: 'Contact',
        route: '/contact'
      },
    ];
  }
}
