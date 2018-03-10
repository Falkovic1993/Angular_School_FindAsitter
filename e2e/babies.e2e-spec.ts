import { browser, by, element } from 'protractor';


describe('Test for babies', () => {
    it('1.0 Should create a new baby with valid input', async() => {
        browser.get('users-list');
        element.all(by.css('.babyclass')).then(function(elemsBefore) {
        element(by.id('navBaby')).click();
        element(by.id('username')).sendKeys('TestUser');
        element(by.id('firstname')).sendKeys('TestUser');
        element(by.id('lastname')).sendKeys('TestUser');
        element(by.id('password')).sendKeys('TestUser');
        element(by.id('password2')).sendKeys('TestUser');
        element(by.id('birthdate')).sendKeys('TestUser');
        element(by.id('gender')).sendKeys('TestUser');
        element(by.id('workArea')).sendKeys('TestUser');
        element(by.id('signUpBaby')).click();
        element.all(by.css('.babyclass')).then(function(elemsAfter) {
            expect(elemsAfter.length - elemsBefore.length).toBe(1);
        });
    });
    });
    it('1.1 Should not create a new baby with invalid input', async() => {
        browser.get('register-baby');
        element(by.id('username')).sendKeys('TestUser');
        element(by.id('firstname')).sendKeys('TestUser');
        element(by.id('lastname')).sendKeys('TestUser');
        element(by.id('password')).sendKeys('');
        element(by.id('password2')).sendKeys('');
        element(by.id('birthdate')).sendKeys('TestUser');
        element(by.id('gender')).sendKeys('TestUser');
        element(by.id('workArea')).sendKeys('TestUser');
        element(by.id('signUpBaby')).click();
        expect(element(by.id('errMsg')).isDisplayed());
    });
    it('1.2 Should update create a new baby with valid input', async() => {
    });
    it('1.3 Should  not update create a new baby with invalid input', async() => {
    });
    it('1.4 Should delete a new baby with invalid input', async() => {
    });
});
