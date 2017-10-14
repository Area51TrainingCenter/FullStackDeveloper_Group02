import { AppServiciosPage } from './app.po';

describe('app-servicios App', () => {
  let page: AppServiciosPage;

  beforeEach(() => {
    page = new AppServiciosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
