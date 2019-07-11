import { Component } from '@angular/core';

// component
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Router, NavigationStart, RouterEvent, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

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
  public loading: boolean;
  public navBtns: NavBtns[];

  constructor(
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    private router: Router
  ) {
    this.title = 'bigals-dev';
    this.loading = false;
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

    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError) {
            this.loading = false;
      }
      });
  }

  $onInit() {}
}
