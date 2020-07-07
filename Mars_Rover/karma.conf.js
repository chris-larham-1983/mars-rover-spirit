module.exports = function(config) {
    const puppeteer = require('puppeteer');
    process.env.CHROME_BIN = puppeteer.executablePath();
    config.set({
        client: {
            jasmine: {
                random: false,
            }
        },
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            './headless_browser_unit_testing/audioScripts.js': ['coverage'],
            './headless_browser_unit_testing/startupScripts.js': ['coverage'],
            './headless_browser_unit_testing/startupScripts.spec.js': ['coverage'],
            './headless_browser_unit_testing/solSelectScripts.js': ['coverage'],
            './headless_browser_unit_testing/solSelectScripts.spec.js': ['coverage'],
            './headless_browser_unit_testing/solScripts.js': ['coverage'],
            './headless_browser_unit_testing/solScripts.spec.js': ['coverage']
        },
        files: [
            './headless_browser_unit_testing/custom-matchers.js',
            './headless_browser_unit_testing/w3.js',
            './headless_browser_unit_testing/audioScripts.js',
            './headless_browser_unit_testing/startupScripts.js',
            './headless_browser_unit_testing/startupScripts.spec.js',
            './headless_browser_unit_testing/solSelectScripts.js',
            './headless_browser_unit_testing/solSelectScripts.spec.js',
            './headless_browser_unit_testing/solScripts.js',
            './headless_browser_unit_testing/solScripts.spec.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        reporters: ['dots', 'coverage'],
        color: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [{
                type: 'html',
                subdir: 'html'
            }]
        }
    });
}