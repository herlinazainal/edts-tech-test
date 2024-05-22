exports.config = {
    runner: 'local',
    loglevel: 'info',
    framework: 'mocha',
    port: 4723,
    path: '/',
    host: 'localhost',
    maxInstances: 1,
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:platformVersion': '13',
        'appium:app': '/Users/herlinazainal/automation-test/edts-tech-test/android-home-test/klik-idm.apk',
        'appium:deviceName': 'Pixel 8 Pro API 33',
        'appium:automationName': 'UiAutomator2'
    }],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    specs: [
        //'./androidAutomation.js',
        // './eCommerce.js',
        './klikIdmAutomation.js'
    ]
}