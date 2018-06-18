import { DatingAppPage } from './app.po';

describe('dating-app App', () => {
  let page: DatingAppPage;

  beforeEach(() => {
    page = new DatingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
