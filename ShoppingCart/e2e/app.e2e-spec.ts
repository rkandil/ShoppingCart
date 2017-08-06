import { CoursePreparationPage } from './app.po';

describe('course-preparation App', () => {
  let page: CoursePreparationPage;

  beforeEach(() => {
    page = new CoursePreparationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
