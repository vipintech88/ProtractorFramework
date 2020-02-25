let homepage = require('../pages/homepage.js');


describe("Demo Calculator Tests", function () {
    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(4);

        homepage.enterSecondNumber(10);

        homepage.clickGo();

        homepage.verifyResult(14);

        browser.sleep(10000);

    });

    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber(4);

        homepage.enterSecondNumber(10);

        homepage.clickGo1();

       // homepage.verifyResult(14);

        browser.sleep(10000);

    });
});

