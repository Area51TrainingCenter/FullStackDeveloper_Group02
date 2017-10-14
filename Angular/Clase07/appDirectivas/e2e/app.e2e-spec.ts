import { AppDirectivasPage } from './app.po';

describe('app-directivas App', () => {
  let page: AppDirectivasPage;

  beforeEach(() => {
    page = new AppDirectivasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
