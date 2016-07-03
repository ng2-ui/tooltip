import { Ng2TooltipPage } from './app.po';

describe('ng2-tooltip App', function() {
  let page: Ng2TooltipPage;

  beforeEach(() => {
    page = new Ng2TooltipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
