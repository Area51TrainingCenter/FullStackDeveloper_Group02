import { AppServidoresPage } from './app.po';

describe('app-servidores App', () => {
  let page: AppServidoresPage;

  beforeEach(() => {
    page = new AppServidoresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
