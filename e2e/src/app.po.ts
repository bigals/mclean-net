import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHomeBodyMessage() {
    return element(by.css('.mat-body.home-body')).getText();
  }
}
