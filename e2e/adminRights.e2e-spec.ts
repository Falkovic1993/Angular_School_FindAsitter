import { browser, by, element } from "protractor";

var urlChanged = function(url) {
    return function () {
      return browser.getCurrentUrl().then(function(actualUrl) {
        return url != actualUrl;
      });
    };
  };


describe('Test Admin rights', () => {
    it('1.0 - Should not be able to see admin page if not logged in', async() =>{
       browser.get('/test')
       element(by.id('navAdmin')).click();
       browser.wait(urlChanged('/login'), 5000)
        console.log(urlChanged)
    expect(urlChanged).toBe('/login');

           
    })
    it('1.1 Should See admin area if logged in', async() =>{
    
        
    })
    it('1.2 Should update create a new baby with valid input', async() =>{
        
    })
    it('1.3 Should  not update create a new baby with invalid input', async() =>{
        
    })
    it('1.4 Should delete a new baby with invalid input', async() =>{
        
    })

})