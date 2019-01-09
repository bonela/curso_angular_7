import { CursoAngular4Instalacion2Page } from './app.po';

describe('curso-angular4-instalacion2 App', function() {
  let page: CursoAngular4Instalacion2Page;

  beforeEach(() => {
    page = new CursoAngular4Instalacion2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
