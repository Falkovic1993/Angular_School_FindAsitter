import { browser, by, element } from 'protractor';


describe('Test Admin rights', () => {
    it('1.0 - Should not be able to see admin page if not logged in', async() => {
      browser.get('/test');
      element(by.id('navAdmin')).click();
      const url = 'http://localhost:49152/app-login';
      browser.get(url);
      expect(browser.driver.getCurrentUrl()).toEqual(url);
    });
    it('1.1 Should show userlist after logged in', async() => {
      browser.get('/app-login');
      element(by.id('btnLogin')).click();
      expect(element(by.id('navUserList')).isDisplayed());
    });
    it('1.2 Should not show userlist if not logged in', async() => {
      browser.get('/test');
      expect(element(by.id('navUserList')).isPresent()).toBe(false);
    });
    it('1.3 See details about a single baby', async() => {
      browser.get('/app-login');
      element(by.id('btnLogin')).click();
      element(by.id('navUserList')).click();
      element.all(by.css('.btnbabies')).get(1).click();
      expect(element(by.id('detailedUserList')).isDisplayed());
    });
    it('1.4 See details about a single sitter', async() => {
      browser.get('/app-login');
      element(by.id('btnLogin')).click();
      element(by.id('navUserList')).click();
      element.all(by.css('.btnSitters')).get(0).click();
      expect(element(by.id('detailedSitterList')).isDisplayed());
    });
    it('1.5 Delete a user', async() => {
      browser.get('/app-login');
      element(by.id('btnLogin')).click();
      element(by.id('navUserList')).click();
      element.all(by.css('.babyclass')).then(function(elemsBefore) {
        element.all(by.css('.btnDeleteBaby')).get(0).click();
        element.all(by.css('.babyclass')).then(function(elemsafter) {
          expect(elemsafter.length - elemsBefore.length).toBe(-1);
      });
    });
  });
    it('1.6 Edit a user', async() => {
      browser.get('/app-login');
      element(by.id('btnLogin')).click();
      element(by.id('navUserList')).click();
      const currentName = element.all(by.css('.babyUsername')).get(0).getText();
      element.all(by.css('.btnbabies')).get(0).click();
      element(by.id('detailedBabyUsername')).clear();
      element(by.id('detailedBabyUsername')).sendKeys('Emil');
      element(by.id('btnUpdateBaby')).click();
      browser.navigate().back();
      const newName = element.all(by.css('.babyUsername')).get(0).getText();
      expect(newName).toBe('Emil');
    });
  });
