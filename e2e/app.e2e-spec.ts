import { StudyangularPage } from './app.po';

describe('studyangular App', () => {
  let page: StudyangularPage;

  beforeEach(() => {
    page = new StudyangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
