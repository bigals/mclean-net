import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHomeBodyMessage()).toEqual('You have found the personal site of Alex McLean!' +
    'I am a computer engineer from Southeast Michigan, who spends most of his time tinkering on the web these days.' +
    'This site serves to showcase past and future projects, ' +
    'a white-board for me to jot crazy throughts and findings down on, ' +
    'and above all a learning experience!');
  });
});
