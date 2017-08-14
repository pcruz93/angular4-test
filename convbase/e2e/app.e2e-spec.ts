import { ConvbasePage } from './app.po';

describe('convbase App', () => {
  let page: ConvbasePage;

  beforeEach(() => {
    page = new ConvbasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
