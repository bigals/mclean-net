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
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title: string;
  public navBtns: NavBtns[];

  constructor (private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    this.title = 'bigals-dev';
    this.navBtns = [
      {
        label: 'Home',
        route: '/'
      },
      {
        label: 'Blog',
        route: '/blog'
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
    this.angulartics2GoogleAnalytics.startTracking();
  }

  $onInit() {
  }
}
