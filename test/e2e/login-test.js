let config = require('../../nightwatch.conf.js');

module.exports = {
    'Login_test_success' : function (browser) {
        browser
            .url('http://localhost/iva-babelomics/src/')
            .windowMaximize()
            .waitForElementVisible('body', 1000)
            .assert.title('IVA')
            .assert.visible('a[id="loginButton"]')
            .pause(500)
            .click('a[id="loginButton"]')
            .pause(500)
            .assert.visible('input[id="opencgaUser"]')
            .setValue('input[id="opencgaUser"]', 'test')
            .assert.visible('input[id="opencgaPassword"]')
            .setValue('input[id="opencgaPassword"]', 'test')
            .assert.visible('button[type="submit"]')
            .click('button[type="submit"]')
            .waitForElementVisible('span[data-notify="message"]', 1000)
            .assert.containsText('span[data-notify="message"]', 'test has logged in.')
            .pause(500)
            .saveScreenshot(config.imgpath(browser) + "login.png")
            .assert.visible('a[id="logoutButton"]')
            .assert.containsText('a[id="logoutButton"]', 'Logout')
            .click('a[id="logoutButton"]')
            .waitForElementVisible('a[id="loginButton"]',1000)
            .pause(500)
            .saveScreenshot(config.imgpath(browser) + "logout.png")
            .end()
    },
    'Login_test_fail' : function (browser) {
        browser
            .url('http://localhost/iva-babelomics/src/')
            .windowMaximize()
            .waitForElementVisible('body', 1000)
            .assert.title('IVA')
            .assert.visible('a[href$="#login"]')
            .pause(500)
            .click('a[href$="#login"]')
            .pause(500)
            .assert.visible('input[id="opencgaUser"]')
            .setValue('input[id="opencgaUser"]', 'test2')
            .assert.visible('input[id="opencgaPassword"]')
            .setValue('input[id="opencgaPassword"]', 'test2')
            .assert.visible('button[type="submit"]')
            .click('button[type="submit"]')
            .waitForElementVisible('span[data-notify="message"]', 1000)
            .assert.containsText('span[data-notify="message"]', 'The user id test2 does not exist.')
            .pause(500)
            .saveScreenshot(config.imgpath(browser) + "loginFail.png")
            .end()
    }
}