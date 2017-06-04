import { Angular2ProductappPage } from './app.po';

describe('angular2-productapp App', () => {
  let page: Angular2ProductappPage;

  beforeEach(() => {
    page = new Angular2ProductappPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
