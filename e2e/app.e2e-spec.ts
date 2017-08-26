import { LearningReduxPage } from './app.po';

describe('learning-redux App', () => {
  let page: LearningReduxPage;

  beforeEach(() => {
    page = new LearningReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
