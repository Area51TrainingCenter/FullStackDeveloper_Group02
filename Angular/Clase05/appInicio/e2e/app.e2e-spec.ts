import { AppInicioPage } from './app.po';

describe('app-inicio App', () => {
  let page: AppInicioPage;

  beforeEach(() => {
    page = new AppInicioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
