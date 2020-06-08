describe('Protractor LoginPage App', function() {
  it('should redirect to logiSuccess page if correct user name & password is entered', function() {
    browser.get('http://localhost:4200/loginPage');
    element(by.id('userName')).sendKeys("Admin");
    element(by.id('password')).sendKeys("password");
    element(by.id('submitButton')).click();
    browser.sleep(2000).then(function(){
    browser.getCurrentUrl().then(function(actualUrl){ // promise
      console.log("Actual url",actualUrl);
      expect(actualUrl.indexOf('loginSuccess') !== -1).toBeTruthy(); // check the current url is list
    });
  });
  });
  it('should stay on the same page if username & password is incorrect', function() {
    browser.get('http://localhost:4200/loginPage');
    element(by.id('userName')).sendKeys("Admin");
    element(by.id('password')).sendKeys("wrongPassword");
    element(by.id('submitButton')).click();
    browser.sleep(2000).then(function(){
    browser.getCurrentUrl().then(function(actualUrl){ // promise
      console.log("Actual url",actualUrl);
      expect(actualUrl.indexOf('loginPage') !== -1).toBeTruthy(); // check the current url is list
    });
  });
  });
});