exports.config = {
    defaultTimeoutInterval: 25000,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        'browserName': 'chrome',
    },
 
    specs: [
        'features/*/*/*.feature'
    ],
 
    baseURL: 'https://Angular.IO',
 
    cucumberOpts: {
        format: ['json:reports/results.json', 'pretty'],
        require: ['features/*/*/*steps.js','support/env.js'],
        profile: false,
        'no-source': true
    }
};
