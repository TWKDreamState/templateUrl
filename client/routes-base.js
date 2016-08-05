'use strict';

angular.module('newapp')
    .config(['$angularMeteorSettings', function ($angularMeteorSettings) {
        $angularMeteorSettings.suppressWarnings = false; // Disables write of warnings to console
    }])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });

        $urlRouterProvider.otherwise('/');

        $ocLazyLoadProvider.config({
            // Set to true if you want to see what and when is dynamically loaded
            debug: true
        });

    })
    .run(function ($rootScope, $state) {
        //console.log
        $rootScope.$state = $state;
    });