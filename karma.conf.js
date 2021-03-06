// Karma configuration
// Generated on Mon Mar 09 2015 11:18:18 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        "bower_components/jquery/dist/jquery.min.js",
        "bower_components/angular/angular.min.js",
        "bower_components/ng-tags-input/ng-tags-input.min.js",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angularjs-toaster/toaster.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "bower_components/checklist-model/checklist-model.js",
        "src/app.js",
        "src/sessionService.js",
        "src/sessionInjector.js",
        "src/templateController.js",
        "src/loginController.js",
        "src/loginFactory.js",
        "src/adminController.js",
        "src/adminFactory.js",
        "src/studentController.js",
        "src/studentFactory.js",
        "src/templateByIdController.js",
        "src/evaluationController.js",
        "src/resultController.js",
        "src/evaluationFactory.js",
        "directives/evaluationQuestionDirective.js",
        "directives/templateQuestionDirective.js",
        "directives/resultDirective.js",
        "bower_components/moment/min/moment.min.js",
        "node_modules/angular-mocks/angular-mocks.js",
        "node_modules/less/dist/less.js",
        "bower_components/angular-moment/angular-moment.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "tests/*.spec.js"

        
        
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
