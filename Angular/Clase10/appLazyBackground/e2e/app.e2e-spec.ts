import { AppRutas01Page } from './app.po';

describe('app-rutas01 App', () => {
  let page: AppRutas01Page;

  beforeEach(() => {
    page = new AppRutas01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
