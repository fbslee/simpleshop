import { SimpleshopPage } from './app.po';

describe('simpleshop App', () => {
  let page: SimpleshopPage;

  beforeEach(() => {
    page = new SimpleshopPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
