import { Component } from '@angular/core';

// component
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

export interface NavBtns {
  label: string;
  route: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string;
  public navBtns: NavBtns[];

  constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    this.title = 'bigals-dev';
    this.navBtns = [
      {
        label: 'Home',
        route: '/',
      },
      {
        label: 'About',
        route: '/about',
      },
      {
        label: 'Resume',
        route: '/resume',
      },
      {
        label: 'Projects',
        route: '/projects',
      },
      {
        label: 'Contact',
        route: '/contact',
      },
      {
        label: 'New Bigals game coming soon!',
        route: '',
      },
      {
        label: 'New app swap-board coming soon!',
        route: '',
      },
    ];
    this.angulartics2GoogleAnalytics.startTracking();
  }

  $onInit() {}
}
